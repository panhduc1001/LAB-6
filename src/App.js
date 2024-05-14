import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Photo from "./avatar.png";
import "react-toastify/dist/ReactToastify.css";

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
			<nav class="bg-gray-800">
				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div class="relative flex h-16 items-center justify-between">
						<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span class="absolute -inset-0.5"></span>
								<span class="sr-only">Open main menu</span>

								<svg
									class="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>

								<svg
									class="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div class="flex flex-shrink-0 items-center">
								<img
									class="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
							</div>

							<div class="hidden sm:ml-6 sm:block">
								<div class="flex space-x-4">
									<a
										href="/"
										class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
										aria-current="page"
									>
										Dashboard
									</a>
									<a
										href="/"
										class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
									>
										Team
									</a>
									<a
										href="/"
										class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
									>
										Projects
									</a>
									<a
										href="/"
										class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
									>
										Calendar
									</a>
								</div>
							</div>
						</div>
						<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span class="absolute -inset-1.5"></span>
								<span class="sr-only">View notifications</span>
								<svg
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>
							</button>

							<div class="relative ml-3">
								<div>
									<button
										type="button"
										class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span class="absolute -inset-1.5"></span>
										<span class="sr-only"></span>
									</button>
								</div>

								<div
									class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1"
								>
									<a
										href="/"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0"
									>
										Your Profile
									</a>
									<a
										href="/"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-1"
									>
										Settings
									</a>
									<a
										href="/"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-2"
									>
										Sign out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="sm:hidden" id="mobile-menu">
					<div class="space-y-1 px-2 pb-3 pt-2">
						<a
							href="/"
							class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</a>
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Team
						</a>
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Projects
						</a>
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Calendar
						</a>
					</div>
				</div>
			</nav>
			<div className="mx-auto flex flex-initial mr-150">
				<ToastContainer />
				<div
					id="profile"
					className="w-4/12 h-150 mx-auto 
        flex flex-col items-center justify-center text-neutral-500 dropzone"
				>
					<p className="text-center text-3xl">Profile</p>
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						style={{ display: "none" }}
						ref={(input) => (fileInputRef = input)}
					/>
					<img
						src={avatar}
						className="w-36 rounded-full mt-12 mb-8"
						alt="avatar"
					></img>
					<p className="text-center text-neutral-950 font-bold text-xl">
						Khusab Akhmedov
					</p>
					<p className="text-center text-lg">Web-designer</p>

					<div className="border-2 flex mt-6 mb-4">
						<p className="flex-1 text-center mr-3">
							{" "}
							<span className="text-xl text-neutral-950 font-bold">
								21
							</span>{" "}
							<br></br> Shots
						</p>
						<p className="flex-1 text-center border-black border-l border-r pr-2 pl-2">
							<span className="text-xl text-neutral-950 font-bold">238</span>{" "}
							<br></br> Followers
						</p>
						<p className="flex-1 text-center ml-3">
							<span className="text-xl text-neutral-950 font-bold">101</span>
							<br></br> Following
						</p>
					</div>

					<button
						type="submit"
						className="mt-4 mb-4 text-xl pb-1 pl-6 pr-6 rounded text-neutral-100
          bg-6b6b47 hover:bg-5c5c3d"
						onClick={() => fileInputRef && fileInputRef.click()}
					>
						Upload new avatar
					</button>
					<p className="text-center mb-4 text-xl">Uzbekistan, Tashkent</p>
					<p className="text-center mb-2">
						I'm web designer. I work in programs like figma, <br></br>
						adobe photoshop, adobe illustrator
					</p>
				</div>
				<div className="flex justify-center">
					<div id="info" className="w-1/2 mx-auto flex-1 mt-7">
						<label className="text-neutral-950 font-bold text-base absolute">
							BASIC INFO
						</label>
						<button
							className="float-right text-center rounded text-neutral-100 border-6b6b47 border-2
          bg-6b6b47 hover:bg-5c5c3d px-4 py-1 text-sm"
							onClick={notify}
						>
							SAVE
						</button>
						<button
							className="float-right text-center mr-4 rounded text-neutral-500 border-6b6b47 border-2
          bg-white hover:bg-5c5c3d px-2 py-1 text-sm"
						>
							CANCEL
						</button>

						<div className="flex mt-16">
							<div className="flex-1">
								<label className="text-sm">FIRST NAME</label>
								<input className="border border-gray-300 rounded-md w-11/12 mt-2 mb-2"></input>
							</div>
							<div className="flex-1">
								<label className="text-sm">LAST NAME</label>
								<input className="border border-gray-300 rounded-md w-full mt-2 mb-2"></input>
							</div>
						</div>
						<label className="text-sm mt-5">TITTLE</label>
						<input className="border border-gray-300 rounded-md w-full mt-2 mb-2"></input>
						<label className="text-sm mt-5 text-neutral-900">EMAIL</label>
						<input className="border border-gray-300 rounded-md w-full mt-2"></input>
						<div className="border-b border-gray-300">
							<p className="text-neutral-950 font-bold text-base mt-10 mb-5">
								ABOUT ME
							</p>
						</div>

						<div className="mt-7 border border-gray-300 h-40">
							<p className="pl-2 pt-2 text-neutral-500 text-xs">
								I'm web designer. I work in programs like figma, adobe
								photoshop, adobe illustrator
							</p>
						</div>
					</div>
				</div>
				<div className="h-120 w-2/6 mx-auto flex"></div>
			</div>
		</>
	);
};

export default App;
