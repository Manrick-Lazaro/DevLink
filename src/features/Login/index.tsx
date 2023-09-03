import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { FormEvent, useState } from "react";

export default function Login(): JSX.Element {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function handleSubmit(e: FormEvent): void {
		e.preventDefault();

		alert(`email: ${email}\nsenha: ${password}`)
	}
	
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

				<form 
					onSubmit={handleSubmit}
					className="w-full max-w-xl flex flex-col px-2"
				>
					<Input
						placeholder="Digite o seu E-mail..."
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<Input
						placeholder="*******"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<Button>Acessar</Button>
				</form>
			</div>
		</>
	);
}
