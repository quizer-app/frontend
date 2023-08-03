import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  labelText: string;
  errors?: FieldErrors<FieldValues>;
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
  errors,
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
      {errors && errors[name] && (
        <p className="pt-3 text-sm">
          <span className="text-red-600">
            {errors[name]?.message as string}
          </span>
        </p>
      )}
    </div>
  );
}
