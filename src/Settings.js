import React, { useState } from "react";
import Photo from "./avatar.png";
import NavBar from "./Component/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {
	return (
		<>
			<NavBar />
			<div className="bg-gray-100">
				<div className="pt-10 pl-20">
					<h1 className="text-4xl">Settings</h1>
					<div className="flex items-center mt-10">
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Settings
							</h1>
						</button>
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Notification
							</h1>
						</button>
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Privacy
							</h1>
						</button>
					</div>
				</div>
			</div>

			<div>
				<div className="grid grid-cols-2 gap-2 pt-20">
					<div className="flex flex-col items-center justify-center mx-auto">
						<h2 className="text-2xl mx-auto text-center">Profile</h2>
						<div
							className="relative flex justify-center h-32 w-32 rounded-full bg-gray-600 my-10"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<img
								className="h-32 w-32 rounded-full justify-center"
								src={Photo}
								alt="Khabib Akhamedov"
							/>
						</div>
						<h3 className="text-2xl font-bold">Khabib Akhamedov</h3>
						<h4 className="text-lg font-light">Web-designer</h4>
					</div>
					<h1>DEF</h1>
				</div>
			</div>
		</>
	);
};

export default Settings;
