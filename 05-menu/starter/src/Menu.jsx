import MenuItem from "./MenuItem";
// a function expression produces a value, while a function statement performs an action.
// arrow functions are function statements, they perform actions
const Menu = ({ items }) => {
	return (
		<div className="section-center">
			{items.map((menuItem) => {
				return <MenuItem key={menuItem.id} {...menuItem} />;
			})}
		</div>
	);
};
export default Menu;
