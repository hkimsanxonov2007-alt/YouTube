function PropertiesCard({ textH1, textP, textPS }) {
  return (
    <div className="w-125.75 h-83 rounded-3xl flex flex-col gap-5 p-5">
      <div className="w-full h-16 flex gap-5">
        <img src="14.png" alt="" />
        <div>
          <h1 className="text-[20px] text[#37474F] font-black">{textH1}</h1>
          <p className="text-[16px] text-[#37474F] font-medium">{textP}</p>
        </div>
      </div>
      <p className="text-[#37474FB8] text-[18px] font-medium">{textPS}</p>
    </div>
  );
}
export default PropertiesCard;
