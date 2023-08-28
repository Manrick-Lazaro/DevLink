import Home from "../features/Home";
import Networks from "../features/Networks";
import Admin from "../features/Admin";

export const protectedRoutes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/home/admin",
    element: <Admin />
  },
  {
    path: "/home/admin/social",
    element: <Networks />
  }
];
