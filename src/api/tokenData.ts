export interface TokenData {
  exp: number;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  role: string;
  createdAt: number;
}
