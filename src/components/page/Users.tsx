import { useEffect, useState } from "react";
import axios from "../../api/axios";
// import axios from '../api/axios'

export default function Users() {
	const [users, setUsers] = useState();

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			try {
				const response = await axios.get("/users", {
					signal: controller.signal,
				});
				console.log(response.data);
				if (isMounted) {
					setUsers(response.data);
				}
			} catch (error) {
				console.error(error);
			}
		};
		getUsers();
		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);

	return <div>Users</div>;
}
