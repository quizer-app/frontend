interface FeatureBlockProps {
  title: string;
  description: string;
}

export default function FeatureBlock({
  title,
  description,
}: FeatureBlockProps) {
  return (
    <div className="flex flex-col max-w-md sm:max-w-lg md:max-w-xs lg:max-w-md xl:max-w-sm 2xl:max-w-md">
      <div className="w-16 h-16 bg-blue-600 rounded-md mb-8"></div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-textPrimary font-medium">{description}</p>
    </div>
  );
}
