import React, { useState } from "react";
import Photo from "../avatar.png";
import { Link } from "react-router-dom";
import avatar from "../Settings";

const NavBar = () => {
	return (
		<>
			<nav className="bg-stone-500 flex justify-between">
				<div className="flex items-center">
					<button type="button" className="flex justify-center rounded-md">
						<p className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
							Menu
						</p>
					</button>
				</div>

				<div className="flex items-center justify-center">
					<div className="flex space-x-5 items-center justify-center p-4">
						<Link
							to="/account"
							className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							aria-current="page"
						>
							Account
						</Link>
						<Link
							to="/reposts"
							className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Reposts
						</Link>

						<Link
							to="/settings"
							className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Settings
							{/* <Navigate replace to="/settings" /> */}
						</Link>

						<Link
							to="/help_and_support"
							className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Help & Support
						</Link>
					</div>
				</div>

				<div className="flex items-center px-3 py-2">
					<h1 className="text-gray-300 px-3 py-2 text-sm font-medium">
						Khabib Akhmedov
					</h1>
					<button
						type="button"
						className="relative flex justify-center rounded-full bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						<img
							className="h-8 w-8 rounded-full"
							src={Photo}
							alt="Khabib Akhamedov"
						/>
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
