import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
	const navigate = useNavigate();

	return (
		<section>
			<h1>Unauthorized</h1>
			<p>You do not have access to the requested page</p>
			<div className="flex-grow">
				<button onClick={() => navigate(-1)}>Go back</button>
			</div>
		</section>
	);
}
