function NewsCard({ textNew }) {
  return (
    <div className="w-86 h-101.5 shadow-2xl rounded-2xl bg-[#FFFFFF]">
      <div className="w-full h-[50%]">
        <img src="9.png" alt="" />
        <p className="px-5 py-3">17 Apr 2020</p>
        <p className="px-5 py-3">{textNew}</p>
      </div>
    </div>
  );
}
export default NewsCard;
