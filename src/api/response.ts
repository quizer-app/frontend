export interface AuthResponse {
	message: string;
	errors?: ValidationErrors;
	accessToken?: string;
}

interface ValidationErrors {
	[key: string]: ValidationError;
}

interface ValidationError {
	tag: string;
	value: string;
}
