import { useState } from "react";
import ItemShow from "./ItemShow";

const ListItems = ({ info, updateMenu }) => {
	const [list, setList] = useState([]);

	const updateList = (id) => {
		if (list.includes(id)) {
			setList(list.filter((item) => item !== id));
		} else {
			setList([id, ...list]);
		}
	};
	updateMenu(list);

	return (
		<div className="items__list grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8">
			{info.map((character) => (
				<ItemShow
					key={character.id}
					id={character.id}
					image={character.image}
					titulo={character.name}
					category="Fiction"
					updateList={updateList}
				/>
			))}
		</div>
	);
};

export default ListItems;
