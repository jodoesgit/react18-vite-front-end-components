import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);
	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(menu);
			return;
		}
		const newItems = menu.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu">
				<Title text="Our Menu" />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
};
export default App;
