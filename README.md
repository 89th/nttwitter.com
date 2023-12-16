# nttwitter.com
Lazily combining two of my favorite twitter viewing tools to make a better one.

Uses a [Cloudflare Worker](https://developers.cloudflare.com/workers/) to selectively redirect requests based on user agent.

- Connections from social media sites looking for OGP for embedding are directed to [vxtwitter.com](https://vxtwitter.com/)
- Connections from "real users" are redirected to the far less annoying/intrusive [nitter.net](https://github.com/zedeus/nitter) to view threads.
