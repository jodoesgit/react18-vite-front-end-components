import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			// console.log(tours);
		} catch (error) {
			// console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);
	return <h2>Tours Starter</h2>;
};
export default App;
