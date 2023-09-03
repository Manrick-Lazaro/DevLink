import Social from "../social/Social";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface iFooter {
	urlFacebook?: string;
	urlInstagram?: string;
	urlTwitter?: string;
}

export default function Footer(props: iFooter): JSX.Element {
	const { urlFacebook, urlInstagram, urlTwitter } = props;

	return (
		<footer className="flex justify-center my-4 gap-3">
			{urlFacebook && urlFacebook !== undefined && (
				<Social url={urlFacebook}>
					<FaFacebook
						size={35}
						color="#FFF"
					/>
				</Social>
			)}
			{urlInstagram && urlInstagram !== undefined && (
				<Social url={urlInstagram}>
					<FaInstagram
						size={35}
						color="#FFF"
					/>
				</Social>
			)}
			{urlTwitter && urlTwitter !== undefined && (
				<Social url={urlTwitter}>
					<FaTwitter
						size={35}
						color="#FFF"
					/>
				</Social>
			)}
		</footer>
	);
}
