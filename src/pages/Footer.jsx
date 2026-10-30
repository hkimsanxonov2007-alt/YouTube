function Footer() {
  return (
    <div className="w-full h-86.5 bg-[#717CFF] flex justify-center gap-10 items-center">
      <div className="w-[25%] h-[90%] flex flex-col gap-10">
        <div>
          <img src="1.png" alt="" />
        </div>
        <h1 className="text-[#EEEEEE] text-[18px] font-medium">
          Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.
        </h1>
        <h1 className="text-[#EEEEEE] text-[18px] font-bold">
          © 2020 Executive Trade International.
        </h1>
      </div>
      <div className="w-[15%] h-[90%]">
        <ul className="flex flex-col gap-4 text-[#EEEEEE] py-3">
          <li>About US</li>
          <li>Responsibilities</li>
          <li>Our Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-[15%] h-[90%]">
        <ul className="flex flex-col gap-4 text-[#EEEEEE] py-3">
          <li>Disclaimer</li>
          <li>Testimonials</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="w-[15%] h-[90%] flex justify-start items-end gap-3 py-20">
        <div className=" text-white">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className=" text-white">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className=" text-white">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
export default Footer;
