interface ButtonProps {
	children?: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
	return (
		<button className="bg-blueButtonHover rounded-md w-full font-medium py-4 mt-3">
			{children}
		</button>
	);
}
