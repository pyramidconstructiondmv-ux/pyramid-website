export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Root → index.html
    if (pathname === '/' || pathname === '') {
      return Response.redirect(url.origin + '/index.html', 302);
    }

    // Extensionless path → add .html
    if (!pathname.match(/\.[a-zA-Z0-9]+$/)) {
      return Response.redirect(url.origin + pathname + '.html', 302);
    }

    // Has an extension but no matching file — redirect to homepage
    return Response.redirect(url.origin + '/index.html', 302);
  }
};
