interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Button({ children, disabled }: ButtonProps) {
  return (
    <button
      className="bg-blueButtonHover rounded-md w-full font-medium py-4 mt-3"
      disabled={disabled}>
      {children}
    </button>
  );
}
