export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Strip trailing slash (except root)
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    // Default to index.html for root
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // If no extension, try adding .html
    if (!pathname.includes('.')) {
      pathname = pathname + '.html';
    }

    const newUrl = new URL(request.url);
    newUrl.pathname = pathname;

    try {
      const response = await env.ASSETS.fetch(new Request(newUrl.toString(), request));
      if (response.ok) return response;

      // 404 fallback — serve index.html so user sees the site
      if (response.status === 404) {
        const indexUrl = new URL(request.url);
        indexUrl.pathname = '/index.html';
        return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
      }

      return response;
    } catch (e) {
      return new Response('Server error: ' + e.message, { status: 500 });
    }
  }
};
