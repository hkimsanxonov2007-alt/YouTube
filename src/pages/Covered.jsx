import CoveredCard from "../comapnents/CoveredCard";

function Covered() {
  return (
    <div className="w-full h-screen bg-[#FAFAFA] flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-[37px] text-[#373737]">
        Countries We Covered
      </h1>
      <p className="w-[75%] font-medium text-[22px] text-[#7D7D7D]">
        Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum
        teneam sententiam, quid bonum esse vult.
      </p>
      <div className="flex justify-center items-center gap-10">
        <CoveredCard
          textH1={"Study in Australia"}
          textP={
            "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi "
          }
        />
        <CoveredCard
          textH1={"Study in Canada"}
          textP={
            "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi "
          }
        />
        <CoveredCard
          textH1={"Study in Uk"}
          textP={
            "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi "
          }
        />
      </div>
      <div>
        <img src="8.png" alt="" />
      </div>
    </div>
  );
}
export default Covered;
