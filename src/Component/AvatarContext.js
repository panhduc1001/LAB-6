import React, { createContext, useState } from "react";
import Photo from "../avatar.png";

export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
	const [avatar, setAvatar] = useState(Photo);

	return (
		<AvatarContext.Provider value={{ avatar, setAvatar }}>
			{children}
		</AvatarContext.Provider>
	);
};
