import {
	FieldErrors,
	FieldValues,
	RegisterOptions,
	UseFormRegisterReturn,
} from "react-hook-form";

type InputProps = {
	register: (
		name: string,
		options?: RegisterOptions<FieldValues, string> | undefined
	) => UseFormRegisterReturn<string>;
	errors: FieldErrors<FieldValues>;
	name: string;
	label: string;
	type: "text" | "password";
};

export default function Input({
	register,
	errors,
	name,
	label,
	type,
}: InputProps) {
	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				type={type}
				{...register(name)}
				className={
					errors[name]
						? "input input-bordered input-error w-full max-w-xs"
						: "input input-bordered w-full max-w-xs"
				}
			/>
			{errors[name] && (
				<label className="label">
					<span className="label-text-alt text-error">
						{errors[name]?.message as string}
					</span>
				</label>
			)}
		</div>
	);
}
