import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen w-full">
				<Link to="/">
					<h1 className="mt-11 mb-6 text-white font-bold text-5xl">
						Dev
						<span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
							Link
						</span>
					</h1>
				</Link>
			</div>
		</>
	);
}
