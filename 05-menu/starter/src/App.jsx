import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import { useState } from "react";

const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
	return (
		<main>
			<section className="menu">
				<Title text="Our Menu" />
				<Menu items={menuItems} />
			</section>
		</main>
	);
};
export default App;
