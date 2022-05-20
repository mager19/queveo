import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container mx-auto">
				<div className="flex flex-wrap px-4">
					<div className="menu w-full py-3 flex justify-between border-b border-winter">
						<div className="logo">
							<h1 class="text-2xl font-bold text-winter">
								Que veo Pues
							</h1>
						</div>

						<div className="results">
							<h3 class="text-xl font-bold text-winter">
								Has seleccionado{" "}
								<span class="text-orange">12 </span>Shows y
								tienen <span class="text-orange">334</span>{" "}
								Episodios
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
