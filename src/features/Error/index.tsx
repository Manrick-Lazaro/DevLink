import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export default function Error(): JSX.Element {
  const navigate = useNavigate()

	function goHome(): void {
    navigate("/home");
  }

  return (
		<>
			<div className="flex flex-col text-white w-full justify-center items-center min-h-screen">
        <h1 className="font-bold text-7xl mb-4">404</h1>
        <h1 className="font-bold text-4xl mb-4">Página não encontrada.</h1>
        <div className="mt-3 max-w-xl">
          <Button
            onClick={goHome}
          >
            Voltar para a página principal
          </Button>
        </div>
      </div>
		</>
	);
}
