import React, { useState, useEffect } from "react";
import RobotCard from "../components/RobotCard";

const About = () => {
	return (
		<>
			<div className="w-4/5 mx-auto mt-10">
				<h1 className="mb-5 text-center text-amber-500 text-2xl font-bold">
					Tentang Robofriends
				</h1>
				<p className="mb-5 text-center text-amber-500 w-1/2 mx-auto">
					Aplikasi ini dikembangkan oleh Praktikan Kelompok 15 Praktikum RPLBK.
					Dibuatnya aplikasi ini untuk memenuhi Tugas Akhir Praktikum RPLBK.
				</p>
				<div className="pt-5 border-t-2 border-t-amber-500 text-center text-amber-500 w-1/2 mx-auto">
					<p>Teknologi yang digunakan:</p>
				</div>
				<div className="flex flex-col text-center text-amber-500 w-1/2 mx-auto">
					<p>&#x2022; ReactJS</p>
					<p>&#x2022; TailwindCSS</p>
					<p>&#x2022; {`Fake API dari {JSON} Placeholder`}</p>
				</div>
			</div>
			<div className="w-4/5 mx-auto mt-10">
				<h1 className="text-center text-amber-500 text-2xl font-bold">
					Tentang Developer
				</h1>
			</div>
			<div className="flex gap-4 w-4/5 mx-auto mt-8 text-center">
				<RobotCard
					key={"angga"}
					classStyles={"w-1/2 p-4 bg-amber-500 rounded-lg"}
					dataId={"angga"}
					primaryText={"Pramudya Anggara P."}
					secondaryText={"21120119130061"}
				/>
				<RobotCard
					key={"helmi"}
					classStyles={"w-1/2 p-4 bg-amber-500 rounded-lg"}
					dataId={"helmi"}
					primaryText={"Helmi Bagus W."}
					secondaryText={"21120119130061"}
				/>
			</div>
			<footer className="w-4/5 mx-auto mt-10">
				<p className="text-center text-amber-500">
					&copy; 2022 &#x2022; Kelompok 15 Praktikum RPLBK &#x2022; All rights
					maybe not reserved yet.
				</p>
			</footer>
		</>
	);
};

export default About;
