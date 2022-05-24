import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./components/Menu";
import ListItems from "./components/ListItems";
import "./App.css";

function App() {
	// axios
	const [isCharacter, setCharacters] = useState([]);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`https://rickandmortyapi.com/api/character/`
			);
			setCharacters(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [numItems, setNumItems] = useState([]);
	const updateMenu = (list) => {
		const items = list.length;

		setNumItems(items);
	};

	return (
		<div className="App">
			<div className="container mx-auto">
				<div className="flex flex-wrap px-4">
					<Menu items={numItems} />
					<ListItems info={isCharacter} updateMenu={updateMenu} />
				</div>
			</div>
		</div>
	);
}

export default App;
