import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";

export default function useAxiosPrivate() {
	const { auth, setAuth } = useAuth();

	// const refreshTokenMutation = useMutation({
	// 	mutationFn: () => {
	// 		return axios.post("/auth/token", null, {
	// 			withCredentials: true,
	// 		});
	// 	},
	// 	onSuccess: (data) => {
	// 		const accessToken: string = data.data.accessToken;
	// 		setAuth((prev: any) => ({ ...prev, accessToken }));
	// 	},
	// 	onError: (err: any) => {
	// 		console.log(err);
	// 	},
	// });

	return axiosPrivate;
}
