import React, { useState, useContext } from "react";
import Photo from "../avatar.png";
import NavBar from "../Component/NavBar";
import { AvatarContext } from "../Component/AvatarContext";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {
	const [avatar, setAvatar] = useState(Photo);
	const notify = () => {
		toast.success("Your avatar is updated!", {
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
			<NavBar />
			<ToastContainer />
			<div className="bg-gray-100">
				<div className="pt-10 pl-20">
					<h1 className="text-4xl">Settings</h1>
					<div className="flex items-center mt-10">
						{/* Buttons */}
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="text-stone-500 hover:bg-stone-500 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Settings
							</h1>
						</button>
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="text-stone-500 hover:bg-stone-500 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Notification
							</h1>
						</button>
						<button type="button" className="flex justify-center rounded-md">
							<h1 className="text-stone-500 hover:bg-stone-500 hover:text-white rounded-md px-3 py-2 text-base font-medium">
								Privacy
							</h1>
						</button>
					</div>
				</div>
			</div>

			{/* Left column */}
			<div>
				<div className="grid grid-cols-2 gap-2 pt-10 divide-x divide-gray-300">
					<div>
						<div className="flex flex-col items-center justify-center mx-auto">
							<p className="text-2xl text-stone-500 mx-auto text-center">
								Profile
							</p>
							{/* Profile image */}
							<div
								className="relative flex justify-center h-32 w-32 rounded-full bg-gray-600 my-10"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<input
									type="file"
									accept="image/*"
									onChange={handleFileChange}
									style={{ display: "none" }}
									ref={(input) => (fileInputRef = input)}
								/>

								<img
									className="h-32 w-32 rounded-full justify-center border-4 border-stone-500"
									src={avatar}
									alt="Khabib Akhamedov"
								/>
							</div>

							<p className="text-2xl font-bold">Khabib Akhamedov</p>
							<p className="text-lg font-light text-stone-500">Web-designer</p>
						</div>

						{/* Statistics */}
						<div>
							<div className="grid grid-cols-3 gap-3 pt-10 divide-x divide-stone-500">
								{/* Column 1 */}
								<div className="flex flex-col items-center justify-center">
									<p className="text-2xl mb-1">21</p>
									<p className="text-sm text-stone-500">Shots</p>
								</div>

								{/* Column 2 */}
								<div className="flex flex-col items-center justify-center">
									<p className="text-2xl mb-1">238</p>
									<p className="text-sm text-stone-500">Followers</p>
								</div>

								{/* Column 3 */}
								<div className="flex flex-col items-center justify-center">
									<p className="text-2xl mb-1">101</p>
									<p className="text-sm text-stone-500">Following</p>
								</div>
							</div>
						</div>

						{/* Upload avatar button */}
						<div className="flex flex-col items-center justify-center mx-auto pt-10">
							<button
								type="button"
								className="flex justify-center rounded-md bg-stone-500"
								onClick={() => fileInputRef && fileInputRef.click()}
							>
								<p className="text-white hover:bg-stone-700 rounded-md px-10 py-2 text-base font-medium">
									Upload new avatar
								</p>
							</button>
						</div>

						{/* User info */}
						<div className="flex flex-col items-center justify-center mx-auto pt-10">
							<p className="text-2xl text-stone-500 mb-5">
								Uzbekistan, Tashkent
							</p>
							<p className="text-sm text-stone-500 text-center mx-20 mb-5">
								I'm a web designer, I work in programs like Figma, Adobe
								Photoshop, and Adobe Illustrator.
							</p>
						</div>
					</div>

					{/* Right column */}
					<div>
						{/* Basic info and buttons */}
						<div className="flex flex-row justify-between items-start mx-20 my-10 py-5 border-b border-gray-300">
							<p className="font-semibold">BASIC INFO</p>
							<div className="flex">
								<button
									type="button"
									className="flex justify-center rounded-md bg-white mr-2"
								>
									<p className="text-stone-500 border-2 border-stone-500 hover:text-white hover:bg-stone-700 rounded-md px-10 py-2 text-base font-medium">
										CANCEL
									</p>
								</button>

								<button
									type="button"
									className="flex justify-center rounded-md bg-stone-500"
								>
									<p className="text-white border-2 border-stone-500 hover:bg-stone-700 rounded-md px-10 py-2 text-base font-medium">
										SAVE
									</p>
								</button>
							</div>
						</div>

						{/* Inputs */}
						<div className="mx-20 border-b border-gray-300">
							{/* First + Last name */}
							<div className="flex flex-row justify-items-start items-start">
								<div className="basis-3/5 mr-5">
									<p className="text-sm mb-2">FIRST NAME</p>
									<textarea className="w-full h-10 pt-2 pl-2 border-2 rounded-md"></textarea>
								</div>

								<div className="basis-2/5">
									<p className="text-sm mb-2">LAST NAME</p>
									<textarea className="w-full h-10 pt-2 pl-2 border-2 rounded-md"></textarea>
								</div>
							</div>

							{/* Title */}
							<div className="mt-10">
								<p className="text-sm mb-2">TITLE</p>
								<textarea className="w-full h-10 pt-2 pl-2 border-2 rounded-md"></textarea>
							</div>

							{/* Email */}
							<div className="mt-10">
								<p className="text-sm mb-2">EMAIL</p>
								<textarea className="w-full h-10 pt-2 pl-2 border-2 rounded-md"></textarea>
							</div>

							{/* About me */}
							<div className="my-10">
								<p className="font-semibold">ABOUT ME</p>
							</div>
						</div>

						{/* About me input */}
						<div className="mx-20 my-10">
							<textarea className="w-full h-32 pt-2 p-2 border-2 rounded-md"></textarea>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
