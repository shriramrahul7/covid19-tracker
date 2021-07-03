import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCon = new AbortController();

		fetch(url, { signal: abortCon.signal })
			.then(res => {
				if (!res.ok) {
					throw Error('could not fetch the resource at the location.')
				}
				return res.json();
			})
			.then((data) => {
				setData(data)
				setIsLoading(false);
				setError(null)
			}).catch((err) => {
				if (err.name === 'AbortError') {
					console.log(err);
				} else {
					setError(err.message);
					setIsLoading(false)
				}
			});

		return () => abortCon.abort();
	}, [url]);

	return { data, isLoading, error };
}

export default useFetch;