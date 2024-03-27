import FeatureBlock from "./FeatureBlock";

export default function Features() {
  return (
    <section className="bg-primary/2 w-full text-white">
      <div className="flex flex-col gap-28 py-16 md:py-20 lg:py-28 px-4 mainContainer mx-auto">
        <div className="max-w-md sm:max-w-lg mx-auto">
          <h2 className="font-bold mb-5 text-center text-3xl md:text-4xl">
            Main Features
          </h2>
          <p className="text-textPrimary text-center font-medium md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos
            ut architecto consectetur quod autem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
          <FeatureBlock
            title="Totally Free"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam, corporis porro adipisci veritatis temporibus at assumenda impedit cumque?"
          />
        </div>
      </div>
    </section>
  );
}
