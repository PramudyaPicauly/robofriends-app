import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="sticky top-0 w-full py-4 bg-slate-800 shadow-amber-500 shadow-lg">
			<ul className="flex gap-6 w-fit mx-auto text-amber-500">
				<NavLink to={"/"}>Robots</NavLink>
				<NavLink to={"/posts"}>Posts</NavLink>
				<NavLink to={"/about"}>About</NavLink>
			</ul>
		</nav>
	);
};

export default Navigation;
