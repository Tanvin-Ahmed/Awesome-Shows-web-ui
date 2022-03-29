import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const ShowsContext = createContext();

const ShowsProvider = ({ children }) => {
	const [shows, setShows] = useState([]);
	const [error, setError] = useState([]);
	const [loading, setLoading] = useState([]);

	useEffect(() => {
		const get = async () => {
			setError("");
			setLoading(true);
			try {
				const { data } = await axios(
					"https://api.tvmaze.com/search/shows?q=all"
				);
				setShows(data);
				setError("");
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};
		get();
	}, []);
	return (
		<ShowsContext.Provider value={{ shows, error, loading }}>
			{children}
		</ShowsContext.Provider>
	);
};

export default ShowsProvider;
