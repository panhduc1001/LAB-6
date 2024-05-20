import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AvatarContext } from "./Component/AvatarContext"; // Ensure this import path is correct
import App from "./App"; // Ensure these import paths are correct
import Settings from "./Pages/Settings";
import Account from "./Pages/Account";
import reportWebVitals from "./reportWebVitals";

const RootComponent = () => {
	const [avatar, setAvatar] = useState(null);

	return (
		<AvatarContext.Provider value={{ avatar, setAvatar }}>
			<Router>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</Router>
		</AvatarContext.Provider>
	);
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
