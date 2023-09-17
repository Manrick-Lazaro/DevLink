import { iLinks } from "../../features/Admin";

interface ButtonsLinksProps {
	links: iLinks[];
}

export default function ButtonsLinks(props: ButtonsLinksProps): JSX.Element {
	const { links } = props;

	return (
		<>
			{links.map((link) => (
				<section
					className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
					key={link.id}
					style={{backgroundColor: link.background, color: link.colorName}}
				>
					<a href={link.url} target="_blank">
						<p className="md:text-lg text-base">{link.name}</p>
					</a>
				</section>
			))}
		</>
	);
}
