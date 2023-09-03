import { ReactNode } from "react";

interface iSocial {
	url: string;
	children: ReactNode;
}

export default function Social(props: iSocial): JSX.Element {
	const { url, children } = props;
	return (
		<a
			href={url}
			rel="noopener noreferrer"
			target="_blanck"
		>
			{children}
		</a>
	);
}
