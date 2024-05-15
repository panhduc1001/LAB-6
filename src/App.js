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

	return <NavBar />;
};

export default App;
