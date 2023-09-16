import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "..";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";

export default function Header(): JSX.Element {
	async function handleLogout(): Promise<void> {
    await signOut(auth);
  }

	return (
		<>
			<header className="w-full max-w-2xl mt-4 px-1">
				<nav className="w-full bg-white flex justify-between items-center px-3 py-3 rounded-md">
					<div className="flex gap-5 font-medium">
						<Link to="/">Home</Link>
						<Link to="/home/admin">Links</Link>
						<Link to="/home/admin/social">Redes sociais</Link>
					</div>
					<div className="w-10 rounded-3xl">
						<Button onClick={handleLogout}>
							<BiLogOut
								size={28}
								color="#FFFFFF"
							/>
						</Button>
					</div>
				</nav>
			</header>
		</>
	);
}
