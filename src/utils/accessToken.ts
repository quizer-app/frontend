import { TokenData } from "@/api/tokenData";

let accessToken: string | null = null;

export function getAccessToken(): string | null {
	return accessToken;
}

export function setAccessToken(token: string | null) {
	accessToken = token;
}

export function getTokenData(): TokenData | null {
	if (!accessToken) return null;
	const tokenData = JSON.parse(atob(accessToken.split(".")[1])) as TokenData;
	return tokenData;
}

export function isAuthenticated(): boolean {
	console.log(accessToken);
	return accessToken !== null;
}

export function logout() {
	setAccessToken(null);
}
