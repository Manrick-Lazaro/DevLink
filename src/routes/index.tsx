import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

import { useState } from "react";

export function Routers(): React.ReactElement | null {
	const [routes, setRoutes] = useState(publicRoutes);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setRoutes([...protectedRoutes, ...publicRoutes]);
		} else {
			setRoutes(publicRoutes);
		}
	});

	const element = useRoutes([...routes]);

	return element;
}
