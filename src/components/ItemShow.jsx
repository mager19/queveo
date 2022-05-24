import { useState } from "react";
const ItemShow = ({ id, image, titulo, category, updateList }) => {
	const [isSelected, setSelected] = useState(false);

	const handleClick = (id) => {
		setSelected((isSelected) => !isSelected);
		//todo: error al primer click
		updateList(id);
	};

	return (
		<div
			className={
				isSelected === true
					? "item__show cursor-pointer filter grayscale"
					: "item__show cursor-pointer"
			}
			onClick={() => handleClick(id)}
		>
			<figure>
				<img src={image} alt="show" />
			</figure>
			<h4 className="text-xl text-orange font-bold my-2">{titulo}</h4>
			<h5 className="text-sm text-winter font-bold mb-2">{category}</h5>
		</div>
	);
};

export default ItemShow;
