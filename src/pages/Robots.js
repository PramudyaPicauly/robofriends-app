import React, { useState, useEffect } from "react";
import axios from "axios";
import RobotCard from "../components/RobotCard";

const Home = () => {
	const [userData, setUserData] = useState(null);
	const [userDataFiltered, setUserDataFiltered] = useState(null);
	const [keyword, setKeyword] = useState("");

	const handleKeyword = (e) => {
		setKeyword(e.target.value);
	};

	const filterUserData = () => {
		setUserDataFiltered(
			userData.filter((d) => {
				return d.name.toLowerCase().includes(keyword.toLowerCase());
			})
		);
	};

	const handleResetSearch = () => {
		setUserDataFiltered(null);
		setKeyword("");
	};

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUserData(res.data));
	}, []);

	return (
		<>
			<div className="w-1/2 mx-auto my-8 text-center">
				<div className="flex justify-center items-center gap-4 mb-5 text-4xl text-amber-500">
					<h1>RoboFriends</h1>
					<img
						src="https://robohash.org/or?size=80x80"
						alt="robot-robofriends"
						className="w-fit bg-amber-500 rounded-full"
					/>
				</div>
				<form className="flex w-full border-4 border-amber-500 text-slate-800 bg-slate-800 rounded-full">
					<input
						type="text"
						placeholder="Search for friend"
						className="w-9/12 py-1 pl-4 rounded-full outline-none"
						value={keyword}
						onChange={handleKeyword}
					/>
					{userDataFiltered ? (
						<>
							<button
								type="button"
								className="w-1/12 py-1 text-red-500 rounded-r-full"
								onClick={handleResetSearch}
							>
								X
							</button>
							<button
								type="button"
								className="w-2/12 py-1 text-white bg-slate-800 rounded-r-full"
								onClick={filterUserData}
							>
								Search
							</button>
						</>
					) : (
						<button
							type="button"
							className="w-3/12 py-1 text-white bg-slate-800 rounded-r-full"
							onClick={filterUserData}
						>
							Search
						</button>
					)}
				</form>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-11/12 mx-auto">
				{userDataFiltered
					? userDataFiltered &&
					  userDataFiltered.map((data, index) => {
							return (
								<RobotCard
									key={index}
									classStyles={
										"bg-amber-500 text-slate-800 text-center p-4 rounded-lg"
									}
									dataId={data.id}
									primaryText={data.name}
									secondaryText={data.email}
								/>
							);
					  })
					: userData &&
					  userData.map((data, index) => {
							return (
								<RobotCard
									key={index}
									classStyles={
										"bg-amber-500 text-slate-800 text-center p-4 rounded-lg"
									}
									dataId={data.id}
									primaryText={data.name}
									secondaryText={data.email}
								/>
							);
					  })}
			</div>
		</>
	);
};

export default Home;
