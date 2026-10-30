import PropertiesCard from "../comapnents/PropertiesCard";

function Properties() {
  return (
    <div className="w-full h-[944px]] bg-[#FFFFFF] flex flex-col justify-center items-center gap-8">
      <h1 className="text-[37px] text-[#373737] font-bold">Testimonial</h1>
      <p className="w-[75%] text-[22px] text-[#7D7D7D] font-medium">
        Torquem detraxit hosti et quidem faciunt, ut et negent satis esse
        appetendum, alterum. Si sine causa? quae fuerit causa, mox videro;
        interea hoc epicurus in liberos.
      </p>
      <div className="flex justify-center items-center gap-5">
        <PropertiesCard
          textH1={"Harrison Phillips"}
          textP={"Reporter"}
          textPS={
            "Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit "
          }
        />
        <PropertiesCard
          textH1={"Ainara Vergara"}
          textP={"Landscape Architect"}
          textPS={
            "Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex."
          }
        />
        <PropertiesCard
          textH1={"Niek Bove"}
          textP={"Senior Developer"}
          textPS={
            "Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto. "
          }
        />
      </div>
      <div>
        <img src="8.png" alt="" />
      </div>
    </div>
  );
}
export default Properties;
