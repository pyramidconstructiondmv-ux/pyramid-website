export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Serve root as index.html
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    // If no extension, add .html
    if (!pathname.match(/\.[a-zA-Z0-9]+$/)) {
      pathname = pathname + '.html';
    }

    // Build the request with the corrected path
    const assetUrl = new URL(request.url);
    assetUrl.pathname = pathname;
    const assetRequest = new Request(assetUrl.toString(), request);

    const response = await env.ASSETS.fetch(assetRequest);

    // If ASSETS redirects (307/301/302), don't follow — try fetching the target directly
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (location) {
        const redirectUrl = new URL(location, request.url);
        // Add .html if no extension
        if (!redirectUrl.pathname.match(/\.[a-zA-Z0-9]+$/)) {
          redirectUrl.pathname = redirectUrl.pathname + '.html';
        }
        return env.ASSETS.fetch(new Request(redirectUrl.toString(), request));
      }
    }

    return response;
  }
};
