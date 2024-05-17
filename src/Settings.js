import React, { useState } from "react";
import Photo from "./avatar.png";
import NavBar from "./Component/NavBar";
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

			{/* Left column */}
			<div>
				<div className="grid grid-cols-2 gap-2 pt-10 divide-x divide-gray-300">
					<div>
						<div className="flex flex-col items-center justify-center mx-auto">
							<h2 className="text-2xl mx-auto text-center">Profile</h2>
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
									className="h-32 w-32 rounded-full justify-center border-4 border-stone-600"
									src={avatar}
									alt="Khabib Akhamedov"
								/>
							</div>

							<h3 className="text-2xl font-bold">Khabib Akhamedov</h3>
							<h4 className="text-lg font-light text-stone-600">
								Web-designer
							</h4>
						</div>

						{/* Statistics */}
						<div>
							<div className="grid grid-cols-3 gap-3 pt-10 divide-x divide-stone-600">
								{/* Column 1 */}
								<div className="flex flex-col items-center justify-center">
									<h2 className="text-2xl mb-1">21</h2>
									<h3 className="text-sm text-stone-600">Shots</h3>
								</div>

								{/* Column 2 */}
								<div className="flex flex-col items-center justify-center">
									<h2 className="text-2xl mb-1">238</h2>
									<h3 className="text-sm text-stone-600">Followers</h3>
								</div>

								{/* Column 3 */}
								<div className="flex flex-col items-center justify-center">
									<h2 className="text-2xl mb-1">101</h2>
									<h3 className="text-sm text-stone-600">Following</h3>
								</div>
							</div>
						</div>

						{/* Upload avatar button */}
						<div className="flex flex-col items-center justify-center mx-auto pt-10">
							<button
								type="button"
								className="flex justify-center rounded-md bg-stone-600"
								onClick={() => fileInputRef && fileInputRef.click()}
							>
								<h1 className="text-gray-300 hover:bg-stone-800 hover:text-white rounded-md px-10 py-2 text-base font-medium">
									Upload new avatar
								</h1>
							</button>
						</div>

						{/* User info */}
						<div className="flex flex-col items-center justify-center mx-auto pt-10">
							<h3 className="text-2xl text-stone-600 mb-5">
								Uzbekistan, Tashkent
							</h3>
							<h4 className="text-sm text-stone-600 text-center mx-20 mb-5">
								I'm a web designer, I work in programs like Figma, Adobe
								Photoshop, and Adobe Illustrator.
							</h4>
						</div>
					</div>

					{/* Right column */}
					<div>
						<h1>DEF</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
