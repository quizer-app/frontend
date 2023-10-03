import img from "../../../assets/images/office.jpg";

export default function QuizTile() {
  return (
    <div className="bg-secondary rounded-md max-w-[400px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[260px]">
      <div>
        <img src={img} className="w-full rounded-t-md" />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-3">
          Best UI components for modern websites
        </h3>
        <p className="text-textPrimary font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          dictum neque, laoreet dolor.
        </p>
        <span className="h-[1px] bg-white bg-opacity-10 block my-6"></span>
        <div className="flex items-center gap-4">
          <img src={img} className="w-10 h-10 rounded-2xl" />
          <div className="border-r-[1px] border-white border-opacity-10 pr-4">
            <h4 className="text-white font-bold text-sm">By Szymon Budziak</h4>
            <p className="text-textPrimary text-xs font-semibold">
              Graphic Designer
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Date</h4>
            <p className="text-textPrimary text-xs font-semibold">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
