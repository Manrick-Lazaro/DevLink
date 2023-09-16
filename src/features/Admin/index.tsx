import { useState } from "react";
import { Input } from "../../components";
import Header from "../../components/header";

export default function Admin(): JSX.Element {
	const [nameLink, setNameLink] = useState("");
	const [urlLink, setUrlLink] = useState("");
	const [colorNameLink, setColorNameLink] = useState("#ffffff");
	const [backgroundColorLink, setBackgroundColorLink] = useState("#222222");

	return (
		<>
			<div className="flex items-center flex-col min-h-screen pb-7 px-2">
				<Header />

				<form className="flex flex-col w-full max-w-xl mt-8 mb-3">
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
							<p style={{ color: colorNameLink }}>{nameLink}</p>
						</article>
					</section>
				</form>
			</div>
		</>
	);
}
