import { ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface props {
	children: ReactNode;
}

export function Protected({ children }: props): any {
	const [loading, setLoading] = useState(true);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoading(false);
				setSigned(true);
			} else {
				setLoading(false);
				setSigned(false);
			}
		});
	}, []);

  if(loading) {
    return <></>
  }

  if(!signed) {
    return <Navigate to="/login" />
  }

	return children;
}
