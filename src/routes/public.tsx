import Login from "../features/Login"

export const publicRoutes = [
  {
    path: "*",
    element: <Login />
  },
  {
    path: "/",
    element: <Login />
  }
]