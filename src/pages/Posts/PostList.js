import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { NewPosts } from "./index";

const PostList = () => {
	const { newPostData } = NewPosts();
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => setPostData(res.data));
	}, []);

	return (
		<>
			<div className="flex gap-2 w-fit mx-auto mt-10">
				<NavLink to={"form"} className="px-3 py-2 bg-amber-500 rounded-lg">
					+ New Post
				</NavLink>
			</div>
			{(newPostData.length > 0 || newPostData == true) &&
				newPostData
					.slice(0)
					.reverse()
					.reverse()
					.map((data, index) => {
						return (
							<div key={index} className="flex flex-col mt-10 mx-auto w-5/6">
								<div className="flex gap-4 items-center">
									<img
										src={`https://robohash.org/${data.userId}?size=120x120`}
										alt={`robot-${data.userId}`}
										className="w-fit bg-amber-500 rounded-full"
									/>
									<div className="flex flex-col px-2 py-4 bg-amber-500 rounded-lg">
										<p className="mb-4 capitalize text-center font-bold">
											{data.title}
										</p>
										<p className="text-center text-xs">{`"${data.body}"`}</p>
									</div>
								</div>
							</div>
						);
					})}
			{(newPostData.length > 0 || newPostData == true) && (
				<div className="flex justify-center items-center w-5/6 mx-auto mt-10">
					<div className="w-1/3  border-t-2 border-t-amber-500"></div>
					<div className="w-1/3 text-center text-amber-500">Recent Posts</div>
					<div className="w-1/3 border-t-2 border-t-amber-500"></div>
				</div>
			)}
			{postData.map((data, index) => {
				return (
					<div key={index} className="flex flex-col mt-10 mx-auto w-5/6">
						<div className="flex gap-4 items-center">
							<img
								src={`https://robohash.org/${data.userId}?size=120x120`}
								alt={`robot-${data.userId}`}
								className="w-fit bg-amber-500 rounded-full"
							/>
							<div className="flex flex-col px-2 py-4 bg-amber-500 rounded-lg">
								<p className="mb-4 capitalize text-center font-bold">
									{data.title}
								</p>
								<p className="text-center text-xs">{`"${data.body}"`}</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default PostList;
