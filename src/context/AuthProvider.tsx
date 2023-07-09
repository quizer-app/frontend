import React, { ReactNode, createContext, useState } from "react";

interface AuthContextType {
	auth: any;
	setAuth: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
