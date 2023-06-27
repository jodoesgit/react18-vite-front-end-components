import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
	const [people, setPeople] = useState(data);
	return (
		<section className="container">
			<h3>{people.length} birthdays today</h3>
			<List people={people} />
			<button
				type="button"
				className="btn btn-block"
				onClick={() => setPeople([])}
			>
				clear all
			</button>
		</section>
	);
};
export default App;
