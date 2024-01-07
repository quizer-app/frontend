import img from "../../../../assets/images/office.jpg";

type QuizTileProps = {
  name: string;
  userName: string;
  desc: string;
};
export default function QuizTile({ name, userName }: QuizTileProps) {
  return (
    <div className="bg-secondary rounded-md w-full">
      <a href="#" className="relative">
        <img src={img} className="w-full rounded-t-md" />
        <div className="text-white text-sm font-bold absolute top-4 right-4 px-4 py-2 bg-lightBlue rounded-3xl">
          Category/QS
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-white text-2xl font-bold mb-3">{name}</h3>
        <p className="text-textPrimary font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          dictum neque, laoreet dolor
        </p>
        <span className="h-[1px] bg-white bg-opacity-10 block my-6"></span>
        <div className="flex items-center gap-4">
          <img src={img} className="w-10 h-10 rounded-3xl" />
          <div className="border-r-[1px] border-white border-opacity-10 pr-4">
            <h4 className="text-white font-semibold text-sm">By {userName}</h4>
            <p className="text-textPrimary text-xs font-medium">
              Graphic Designer
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Date</h4>
            <p className="text-textPrimary text-xs font-medium">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
