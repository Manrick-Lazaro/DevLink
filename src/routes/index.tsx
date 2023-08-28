import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export function Routers(): React.ReactElement | null {
	const token = localStorage.getItem("token");
	const routes =
		token != null ? [...protectedRoutes, ...publicRoutes] : publicRoutes;
	const element = useRoutes([...routes]);
	return element;
}
