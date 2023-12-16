/**
 * Mercifully simple. Thanks Cloudflare!
 */

export default {
  async fetch(request, env, ctx) {
    // Check the request URL or headers to determine the destination
    if (request.headers.get('User-Agent').includes('Discord')) {
      // Route requests with "Discord" in User-Agent to vxtwitter.com, preserving the URL
      const vxtwitterURL = new URL(request.url);
      vxtwitterURL.hostname = 'vxtwitter.com';
      return fetch(vxtwitterURL.href, request);
    } else {
      // Redirect other requests to nitter.net, preserving the URL
      const nitterURL = new URL(request.url);
      nitterURL.hostname = 'nitter.net';
      return new Response(null, {
        status: 302,
        headers: {
          Location: nitterURL.href,
        },
      });
    }
  },
};
