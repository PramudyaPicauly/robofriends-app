import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { NewPosts } from "./index";

const PostForm = () => {
	const navigate = useNavigate();
	const { newPostData, setNewPostData } = NewPosts();

	const [judulPost, setJudulPost] = useState("");
	const [isiPost, setIsiPost] = useState("");

	const handlePostData = (e) => {
		e.preventDefault();
		try {
			axios
				.post("https://jsonplaceholder.typicode.com/posts", {
					title: judulPost,
					body: isiPost,
					userId: Math.floor(Math.random() * 1000),
				})
				.then(function (response) {
					setNewPostData([...newPostData, response.data]);
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			setJudulPost("");
			setIsiPost("");
			navigate("/posts");
		} catch (error) {}
	};

	return (
		<form className="flex flex-col w-2/3 mx-auto mt-10">
			<div className="flex">
				<div className="w-1/6 flex flex-col gap-4">
					<label className="py-1 text-amber-500">Judul :</label>
					<label className="py-1 text-amber-500">Isi :</label>
				</div>
				<div className="w-5/6 flex flex-col gap-4">
					<input
						required
						type="text"
						className="px-2 py-1 rounded-lg outline-none"
						value={judulPost}
						onChange={(e) => setJudulPost(e.target.value)}
					/>
					<input
						required
						type="text"
						className="px-2 py-1 rounded-lg outline-none"
						value={isiPost}
						onChange={(e) => setIsiPost(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex gap-2 w-fit mx-auto mt-5">
				<div className="px-3 py-2 bg-blue-500 text-white rounded-lg">
					<button type="button" onClick={handlePostData}>
						Simpan
					</button>
				</div>
				<NavLink
					to={"/posts"}
					className="px-3 py-2 bg-red-500 text-white rounded-lg"
				>
					Batal
				</NavLink>
			</div>
		</form>
	);
};

export default PostForm;
