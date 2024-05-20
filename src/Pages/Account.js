import React, { useContext } from "react";
import Photo from "../avatar.png";
import NavBar from "../Component/NavBar";
import { AvatarContext } from "../Component/AvatarContext";
import { ToastContainer } from "react-toastify";

const Account = () => {
	const { avatar } = useContext(AvatarContext);
	return (
		<>
			<NavBar />
			<ToastContainer />
			<div>
				{/* Background */}
				<div className="h-64 bg-lime-800 relative mb-32">
					{avatar && (
						<img
							src={avatar}
							alt="Avatar"
							className="h-40 w-40 bg-gray-600 rounded-full justify-center border-4 border-stone-500 absolute bottom-[-30%] left-1/2 transform -translate-x-1/2"
						/>
					)}
				</div>

				{/* Info */}
				<div className="mt-50 mx-72">
					<div className="flex flex-col items-center justify-center mx-auto">
						<p className="text-3xl font-bold">Khabib Akhamedov</p>
						<p className="text-lg font-light text-stone-500">
							Uzbekistan, Tashkent
						</p>
						<p className="text-sm text-stone-500 text-center mx-32 my-5">
							I'm a web designer, I work in programs like Figma, Adobe
							Photoshop, and Adobe Illustrator.
						</p>
					</div>

					{/* Statistics */}
					<div>
						<div className="grid grid-cols-3 gap-3 pt-10 divide-x divide-stone-500">
							{/* Column 1 */}
							<div className="flex flex-col items-center justify-center">
								<p className="text-3xl mb-1">21</p>
								<p className="text-lg text-stone-500">Shots</p>
							</div>

							{/* Column 2 */}
							<div className="flex flex-col items-center justify-center">
								<p className="text-3xl mb-1">238</p>
								<p className="text-lg text-stone-500">Followers</p>
							</div>

							{/* Column 3 */}
							<div className="flex flex-col items-center justify-center">
								<p className="text-3xl mb-1">101</p>
								<p className="text-lg text-stone-500">Following</p>
							</div>
						</div>
					</div>

					{/* Follow and Message buttons */}
					<div>
						<div className="flex flex-row justify-between mx-96 my-10 py-5">
							<button
								type="button"
								className="flex justify-center rounded-md bg-stone-500"
							>
								<p className="text-white border-2 border-stone-500 hover:bg-stone-700 rounded-md px-10 py-2 text-base font-medium">
									Follow
								</p>
							</button>

							<button
								type="button"
								className="flex justify-center rounded-md bg-white mr-2"
							>
								<p className="text-stone-500 border-2 border-stone-500 hover:text-white hover:bg-stone-700 rounded-md px-10 py-2 text-base font-medium">
									Message
								</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
