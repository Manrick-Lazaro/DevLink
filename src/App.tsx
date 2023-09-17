import { createBrowserRouter } from "react-router-dom";

import Home from "./features/Home";
import Admin from "./features/Admin";
import Login from "./features/Login";
import Networks from "./features/Networks";

import { Protected } from "./routes/protected";

const Routers = createBrowserRouter([
	{
		path: "/home",
		element: <Home />,
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
		element: <Networks />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export { Routers };
