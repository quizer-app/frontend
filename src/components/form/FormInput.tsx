import {
	FieldValues,
	RegisterOptions,
	UseFormRegisterReturn,
} from "react-hook-form";

interface FormInputProps {
	name: string;
	type: string;
	placeholder: string;
	labelText: string;
	register: (
		name: string,
		options?: RegisterOptions<FieldValues, string> | undefined
	) => UseFormRegisterReturn<string>;
}

export function FormInput({
	register,
	name,
	type,
	placeholder,
	labelText,
}: FormInputProps) {
	return (
		<div className="mt-8">
			<label htmlFor={name} className="block text-sm font-medium">
				{labelText}
			</label>
			<input
				type={type}
				{...register(name)}
				placeholder={placeholder}
				className="bg-input text-textPrimary rounded-md w-full py-3 pl-6 shadow-md mt-3"
			/>
		</div>
	);
}
