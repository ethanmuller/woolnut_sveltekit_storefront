/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
	if (request.url.startsWith('https://woolnut-backend.mush.network')) {
		// clone the original request, but change the URL
		request = new Request(
			request.url.replace('https://woolnut-backend.mush.network', 'http://localhost:9000'),
			request
		);
	}

	return fetch(request);
}
