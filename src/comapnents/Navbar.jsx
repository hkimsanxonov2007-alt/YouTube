function Navbar() {
  return (
    <div className="w-full h-[10vh] flex justify-around items-center">
      <div className="w-[80%] h-[10vh] flex justify-around items-center">
        <div className="w-36   h-11 flex justify-center items-center">
          <img src="1.png" alt="" />
        </div>
        <ul className="gap-10 flex justify-around items-center">
          <li className="font-semibold">
            <a href="#">Home</a>
          </li>
          <li className="font-semibold">
            <a href="#">About As</a>
          </li>
          <li className="font-semibold">
            <a href="#">Our Services</a>
          </li>
          <li className="font-semibold">
            <a href="#">Responsibilities</a>
          </li>
          <li className="font-semibold">
            <a href="#">Country</a>
          </li>
        </ul>
        <button className="w-28 h-11 border-2 rounded-2xl border-[#717CFF]">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Navbar;
