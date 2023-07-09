import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const [colors, setColors] = useState(new Values("#f15025").all(10));

	return (
		<main>
			<Form />
			<ColorList colors={colors} />
			<ToastContainer position="top-center" />
		</main>
	);
};
export default App;
