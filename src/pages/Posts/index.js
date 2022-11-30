import React, { useState, useEffect, useContext, createContext } from "react";
import { Outlet } from "react-router-dom";

const PostContext = createContext();

export const NewPosts = () => {
	return useContext(PostContext);
};

const Posts = () => {
	const [newPostData, setNewPostData] = useState([]);

	useEffect(() => {
		console.log(newPostData);
	}, [newPostData]);

	return (
		<PostContext.Provider value={{ newPostData, setNewPostData }}>
			<Outlet />
		</PostContext.Provider>
	);
};

export default Posts;
