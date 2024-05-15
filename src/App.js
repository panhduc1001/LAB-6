import React, { useState } from "react";
import Photo from "./avatar.png";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Settings from "./Settings";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [avatar, setAvatar] = useState(Photo);
	const notify = () => {
		toast.success("Your Avatar Has Been Updated !!", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			setAvatar(URL.createObjectURL(file));
		}
	};

	let fileInputRef;

	return (
		<>
			<div className="bg-stone-600 flex justify-between">
				<div className="flex items-center">
					<button type="button" className="flex justify-center rounded-md">
						<h1 className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
							Menu
						</h1>
					</button>
				</div>

				<div className="flex items-center justify-center">
					<div class="flex space-x-5 items-center justify-center p-4">
						<a
							href="/"
							class="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							aria-current="page"
						>
							Account
						</a>
						<a
							href="/"
							class="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Reposts
						</a>
						<Router>
							<a
								href="/settings"
								class="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							>
								Settings
							</a>
							<Routes>
								<Route path="/settings" Component={Settings} />
							</Routes>
						</Router>
						<a
							href="/"
							class="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Help & Support
						</a>
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
						<img className="h-8 w-8 rounded-full" src="./avatar.png" alt="" />
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
