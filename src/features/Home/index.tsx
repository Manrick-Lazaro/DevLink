import { ButtonsLinks, Footer, Header } from "../../components";
import { useEffect, useState } from "react";
import type { iLinks } from "../Admin";
import { Link } from "react-router-dom";

import { db } from "../../services/firebaseConnection";
import {
	getDocs,
	collection,
	orderBy,
	doc,
	query,
	getDoc,
} from "firebase/firestore";

interface iSocial {
	facebook: string;
	instagram: string;
	twitter: string;
}

export default function Home(): JSX.Element {
	const [links, setLinks] = useState<iLinks[]>([]);
	const [social, setSocial] = useState<iSocial>();

	useEffect(() => {
		function loadLinks() {
			const linkRef = collection(db, "links");
			const queryRef = query(linkRef, orderBy("created", "asc"));

			getDocs(queryRef)
				.then((snapshot) => {
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
				})
				.catch((error) => {
					console.log(error);
				});
		}

		loadLinks();
	}, []);

	useEffect(() => {
		function loadLinks(): void {
			const docRef = doc(db, "social", "link");
			getDoc(docRef)
				.then((res) => {
					if (res.data() !== undefined) {
						setSocial({
							facebook: res.data()?.facebook,
							instagram: res.data()?.instagram,
							twitter: res.data()?.twitter,
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}

		loadLinks();
	}, []);

	return (
		<div className="flex flex-col w-full py-3 items-center justify-center">
			<Header />
			<Link to="/home">
				<h1 className="mt-11 mb-6 text-white font-bold text-5xl">
					Dev
					<span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
						Link
					</span>
				</h1>
			</Link>
			<span className="text-gray-50 mb-5 mt-3">Veja meus links</span>/
			<main className="flex flex-col w-11/12 max-w-xl text-center">
				<ButtonsLinks links={links} />
			</main>
			{social && Object.keys(social).length > 0 && (
				<Footer
					urlFacebook={social.facebook}
					urlTwitter={social.twitter}
					urlInstagram={social.instagram}
				/>
			)}
		</div>
	);
}
