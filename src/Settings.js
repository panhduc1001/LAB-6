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
			<h1 color="black">HELLO I'M SETTINGS</h1>
		</>
	);
};

export default Settings;
