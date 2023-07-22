export interface AuthResponse {
	message: string;
	errors?: ValidationErrors;
	token?: string;
}

interface ValidationErrors {
	[key: string]: ValidationError;
}

interface ValidationError {
	tag: string;
	value: string;
}
