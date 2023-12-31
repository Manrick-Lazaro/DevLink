import { FormEvent, useState, useEffect } from "react";
import { Input, Button } from "../../components";
import Header from "../../components/header";

import { FiTrash } from "react-icons/fi";

export interface iLinks {
	id: string;
	name: string;
	url: string;
	colorName: string;
	background: string;
	created: string;
}

import { db } from "../../services/firebaseConnection";
import {
	addDoc,
	collection,
	onSnapshot,
	query,
	orderBy,
	doc,
	deleteDoc,
} from "firebase/firestore";

export default function Admin(): JSX.Element {
	const [nameLink, setNameLink] = useState("");
	const [urlLink, setUrlLink] = useState("");
	const [colorNameLink, setColorNameLink] = useState("#ffffff");
	const [backgroundColorLink, setBackgroundColorLink] = useState("#222222");

	const [links, setLinks] = useState<iLinks[]>([]);

	useEffect(() => {
		const linksRef = collection(db, "links");
		const queryRef = query(linksRef, orderBy("created", "asc"));

		const unsub = onSnapshot(queryRef, (snapshot) => {
			let list = [] as iLinks[];

			snapshot.forEach((doc) => {
				list.push({
					id: doc.id,
					name: doc.data().name,
					url: doc.data().url,
					colorName: doc.data().colorName,
					background: doc.data().background,
					created: doc.data().created,
				});
			});

			setLinks(list);
		});

		return () => {
			unsub();
		};
	}, []);

	function handleSubmit(e: FormEvent): void {
		e.preventDefault();

		if (nameLink === "" && urlLink === "") {
			alert("Preencha todos os campos.");
			return;
		}

		addDoc(collection(db, "links"), {
			name: nameLink,
			url: urlLink,
			colorName: colorNameLink,
			background: backgroundColorLink,
			created: new Date(),
		})
			.then(() => {
				setNameLink("");
				setUrlLink("");
				setColorNameLink("#ffffff");
				setBackgroundColorLink("#222222");
				alert("Cadastrado.");
			})
			.catch((error) => {
				console.log("erro ao cadastrar no banco." + error);
			});
	}

	async function handleDelete(id: string): Promise<void> {
		const docRef = doc(db, "links", id);
		await deleteDoc(docRef);
	}

	return (
		<>
			<div className="flex items-center flex-col min-h-screen pb-7 px-2">
				<Header />

				<form
					className="flex flex-col w-full max-w-xl mt-8 mb-3"
					onSubmit={handleSubmit}
				>
					<label className="font-medium text-white mb-2 mt-2">
						Nome do Link
					</label>
					<Input
						placeholder="Digite o nome do link"
						value={nameLink}
						onChange={(e) => setNameLink(e.target.value)}
					/>

					<label className="font-medium text-white mb-2 mt-2">
						URL do Link
					</label>
					<Input
						placeholder="Digite a url do link"
						value={urlLink}
						onChange={(e) => setUrlLink(e.target.value)}
						type="url"
					/>

					<section className="flex my-4 gap-5">
						<div className="flex gap-2">
							<label className="font-medium text-white mb-2 mt-2">
								Cor do texto
							</label>
							<input
								type="color"
								value={colorNameLink}
								onChange={(e) =>
									setColorNameLink(e.target.value)
								}
							/>
						</div>

						<div className="flex gap-2">
							<label className="font-medium text-white mb-2 mt-2">
								Cor de fundo
							</label>
							<input
								type="color"
								value={backgroundColorLink}
								onChange={(e) =>
									setBackgroundColorLink(e.target.value)
								}
							/>
						</div>
					</section>

					{nameLink !== "" && (
						<section className="flex flex-col justify-center items-center mb-5 p-1 border-gray-100/20 border rounded-md pb-2">
							<label className="font-medium text-white mb-2 mt-2">
								Preview
							</label>
							<article
								className="w-11/12 max-w-lg flex flex-col items-center justify-between rounded px-1 py-3"
								style={{
									marginBottom: 0,
									marginTop: 0,
									backgroundColor: backgroundColorLink,
								}}
							>
								<p style={{ color: colorNameLink }}>
									{nameLink}
								</p>
							</article>
						</section>
					)}

					<div className="w-full mt-6 mb-12">
						<Button>Cadastrar</Button>
					</div>
				</form>

				<h1 className="font-bold text-white mb-4 text-2xl">
					Meus Links
				</h1>

				{links.map((link) => (
					<article
						key={link.id}
						className="flex justify-between items-center w-11/12 max-w-xl p-3 select-none rounded-md mb-4"
						style={{
							backgroundColor: link.background,
							color: link.colorName,
						}}
					>
						<p>{link.name}</p>
						<div>
							<button
								className="mt-1 border border-dashed p-1 bg-zinc-900 rounded"
								onClick={() => handleDelete(link.id)}
							>
								<FiTrash
									size={18}
									color="#ffffff"
								/>
							</button>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
