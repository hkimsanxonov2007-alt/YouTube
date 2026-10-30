function ServicesCard({ colorIcon, textHead, textTitle }) {
  return (
    <div className="w-[25%] h-87.75 shadow-2xl rounded-2xl px-10 bg-[#FFFFFF] py-5 flex flex-col gap-5">
      <div
        className={`w-19 h-19  rounded-[50%]`}
        style={{ backgroundColor: `${colorIcon}` }}
      ></div>
      <h1 className="text-[22px] text-[#37474F] font-bold">{textHead}</h1>
      <p className="text-[16px] text-[#37474FB8] font-medium">{textTitle}</p>
      <button className="w-33 h-8 flex justify-between items-center text-[#717CFF] text-[17px] font-bold ">
        Learn More <i class="fa-solid fa-arrow-right-long"></i> 
      </button>
    </div>
  );
}
export default ServicesCard;
