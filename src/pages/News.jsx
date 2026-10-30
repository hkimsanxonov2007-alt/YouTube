import NewsCard from "../comapnents/NewsCard";

function News() {
  return (
    <div className="w-full h-280 bg-[#FAFAFA] flex flex-col justify-center items-center gap-15">
      <h1 className="font-bold text-[37px] text-[#373737]">News</h1>
      <p className=" w-[78%] font-medium text-[22px] text-[#7D7D7D]">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </p>
      <div className="flex justify-center items-center gap-10">
        <NewsCard textNew={"Come On In. The Water’s Fine (Mostly)"} />
        <NewsCard
          textNew={"Trump Lays Plans to Reverse Obama’s Climate Change "}
        />
        <NewsCard
          textNew={"How a Little Bit of Hydra Regrows a Whole Animal"}
        />
      </div>
      <button className="w-56.5 h-16 bg-[#717CFF] rounded-2xl text-white flex justify-center items-center gap-5">
        Join Here <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
}
export default News;
