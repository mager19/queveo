function Menu({ updateMenu, items }) {
	console.log(updateMenu);
	return (
		<div className="menu w-full py-3 flex justify-between border-b border-winter">
			<div className="logo">
				<h1 className="text-2xl font-bold text-winter">Que veo Pues</h1>
			</div>

			<div className="results">
				<h3 className="text-xl font-bold text-winter">
					Has seleccionado{" "}
					<span className="text-orange">{items} </span>
					Personajes
				</h3>
			</div>
		</div>
	);
}

export default Menu;
