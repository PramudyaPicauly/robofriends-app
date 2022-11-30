import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Robots from "./pages/Robots";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Posts from "./pages/Posts";
import PostList from "./pages/Posts/PostList";
import PostForm from "./pages/Posts/PostForm";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Robots />} />
					<Route path="/posts" element={<Posts />}>
						<Route index element={<PostList />} />
						<Route path="form" element={<PostForm />} />
					</Route>
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
