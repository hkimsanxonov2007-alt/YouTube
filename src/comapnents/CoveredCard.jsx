function CoveredCard({ textH1, textP }) {
  return (
    <div className="w-87 h-88.5 rounded-4xl">
      <div>
        <img src="13.png" alt="" />
      </div>
      <div className="px-3 py-4">
        <h1>{textH1}</h1>
        <p>{textP}</p>
      </div>
    </div>
  );
}
export default CoveredCard;
