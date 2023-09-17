import { ButtonsLinks, Footer, Header } from "../../components";

export default function Home(): JSX.Element {
	return (
		<div className="flex flex-col w-full py-3 items-center justify-center">
			<Header />
			<h1 className="text-white md:text-4xl text-3xl font-bold mt-20">
				Não funciona
			</h1>
			<span className="text-gray-50 mb-5 mt-3">Veja meus links</span>/
			<main className="flex flex-col w-11/12 max-w-xl text-center">
				<ButtonsLinks />
			</main>
			<Footer
				urlFacebook="https://www.facebook.com/profile.php?id=100087888062454"
				urlTwitter="https://twitter.com/Manrick_lazaro"
				urlInstagram="https://www.instagram.com/manrick_lazaro/"
			/>
		</div>
	);
}
