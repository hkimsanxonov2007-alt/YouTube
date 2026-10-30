function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[55%] h-full flex flex-col gap-5 px-15 py-20">
        <h1 className="text-[56px] font-black">
          We Help to <span className="text-blue-500">Build</span> Your Dream
        </h1>
        <p className="text-[#7D7D7D] text-[23px] font-medium">
          We are always availed to consult on taking your higher education to
          the next level so you can stay competitive in the
        </p>
        <button className="w-60 h-16 text-white rounded-2xl bg-[#717CFF] flex gap-5 justify-center items-center">
          Apply Online <i class="fa-solid fa-arrow-right-long"></i>
        </button>
        <div className="w-30 h-10 flex justify-between items-center">
          <div className="text-blue-500">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="text-black">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="text-black">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="w-[45%] h-full relative overflow-hidden">
        <img className="absolute z-1 top-10.5" src="2.png" alt="" />
        <img className="absolute top-40 left-10" src="3.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
