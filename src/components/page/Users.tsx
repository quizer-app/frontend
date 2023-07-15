import { useQuery } from "@tanstack/react-query";
import axios from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";

export default function Users() {
	const { isLoading, isError, data } = useQuery({
		queryKey: ["users"],
		queryFn: () => axios.get("/users"),
	});
	const refresh = useRefreshToken();

	return (
		<article>
			<h2>Users list</h2>
			{JSON.stringify(data)}
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error</div>}
			{!isLoading && !isError && (
				<ul>
					{data.data.map((user: any) => (
						<li key={user.id}>
							{user.username} - {user.email}
						</li>
					))}
				</ul>
			)}

			<button onClick={refresh}>Refresh</button>
		</article>
	);
}
