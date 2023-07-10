import { useState } from "react";

const Form = () => {
	const [newItemName, setNewItemName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newItemName);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>grocery bud</h4>
			<div className="form-control">
				<input
					type="text"
					className="form-input"
					value={newItemName}
					onChange={(event) => setNewItemName(event.target.value)}
				/>
				<button className="btn">add item</button>
			</div>
		</form>
	);
};
export default Form;
