export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // For paths with no file extension (including /), add .html
    // Exception: root / stays as / so ASSETS serves index.html automatically
    if (pathname !== '/' && !pathname.match(/\.[a-zA-Z0-9]+$/)) {
      pathname = pathname + '.html';
      const assetUrl = new URL(request.url);
      assetUrl.pathname = pathname;
      return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    }

    // Root / and all other paths (already have extension): fetch as-is
    return env.ASSETS.fetch(request);
  }
};
