import Questions from "./Questions";
import data from "./data";
import { useState } from "react";

const App = () => {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<Questions questions={questions} />
		</main>
	);
};
export default App;
