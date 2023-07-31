// import { useQuery } from "@tanstack/react-query";
// import { apiPrivate } from "../../api/axios";

export default function Users() {
	// const { isLoading, isError, data } = useQuery({
	// 	queryKey: ["users"],
	// 	queryFn: () => apiPrivate.get("/users"),
	// });

	// return (
	// 	<article>
	// 		<h2>Users list</h2>
	// 		{JSON.stringify(data)}
	// 		{isLoading && <div>Loading...</div>}
	// 		{isError && <div>Error</div>}
	// 		{!isLoading && !isError && (
	// 			<ul>
	// 				{data.data.map((user: any) => (
	// 					<li key={user.id}>
	// 						{user.username} - {user.email}
	// 					</li>
	// 				))}
	// 			</ul>
	// 		)}

	// 		<button>Refresh</button>
	// 	</article>
	// );
	return <div>Users</div>;
}
