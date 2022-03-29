import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowsProvider from "./context/ShowsProvider";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";

function App() {
	return (
		<ShowsProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/show/:id" element={<ShowDetails />} />
				</Routes>
			</BrowserRouter>
		</ShowsProvider>
	);
}

export default App;
