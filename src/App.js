import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import News from "./pages/News";
import TablePage from "./pages/TablePage";
import Team from "./pages/Team/Team";
import Layout from "./pages/Layout";
import Post from "./pages/Post";

import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="matches" element={<Matches />} />
					<Route path="news" element={<News />} />
					<Route path="table" element={<TablePage />} />
					<Route path="team" element={<Team />} />
					<Route path="/post/:postId" element={<Post />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
