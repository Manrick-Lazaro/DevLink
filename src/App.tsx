import { createBrowserRouter } from "react-router-dom";

import Home from "./features/Home";
import Admin from "./features/Admin";
import Login from "./features/Login";
import Networks from "./features/Networks";

import { Protected } from "./routes/protected";
import Error from "./features/Error";

const Routers = createBrowserRouter([
	{
		path: "/home",
		element: (
			<Protected>
				<Home />
			</Protected>
		),
	},
	{
		path: "/admin",
		element: (
			<Protected>
				<Admin />
			</Protected>
		),
	},
	{
		path: "/admin/social",
		element: (
			<Protected>
				<Networks />
			</Protected>
		),
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <Error />,
	},
]);

export { Routers };
