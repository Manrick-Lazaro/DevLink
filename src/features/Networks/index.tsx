import { Button, Header, Input } from "../../components";
import { FormEvent, useState } from "react";

import { db } from "../../services/firebaseConnection";
import { setDoc, addDoc, getDoc, doc } from "firebase/firestore";

export default function Networks(): JSX.Element {
	const [facebook, setFacebook] = useState("");
	const [instagram, setinstagram] = useState("");
	const [twitter, setTwitter] = useState("");

	function handleRegister(e: FormEvent): void {
		e.preventDefault();

		setDoc(doc(db, "social", "link"), {
			facebook: facebook,
			instagram: instagram,
			twitter: twitter,
		})
			.then(() => {
				console.log("concluido");
			})
			.catch((e) => {
				console.log("erro, ", e);
			});
	}

	return (
		<div className="flex items-center flex-col min-h-screen pb-7 px-2">
			<Header />

			<h1 className="text-white text-2xl font-medium mb-4 mt-8">
				Minhas Redes
			</h1>

			<form
				className="flex flex-col max-w-xl w-full"
				onSubmit={handleRegister}
			>
				<label className="mt-2 mb-3 text-white font-medium">
					Link do Facebook
				</label>
				<Input
					placeholder="Digite a ulr do facebook"
					value={facebook}
					onChange={(e) => setFacebook(e.target.value)}
				/>

				<label className="mt-2 mb-3 text-white font-medium">
					Link do Instagram
				</label>
				<Input
					placeholder="Digite a ulr do facebook"
					value={instagram}
					onChange={(e) => setinstagram(e.target.value)}
				/>

				<label className="mt-2 mb-3 text-white font-medium">
					Link do Twitter
				</label>
				<Input
					placeholder="Digite a ulr do facebook"
					value={twitter}
					onChange={(e) => setTwitter(e.target.value)}
				/>

				<Button>Salvar</Button>
			</form>
		</div>
	);
}
