import ServicesCard from "../comapnents/ServicesCard";

function Services() {
  return (
    <div className="w-full h-[180vh] bg-[#FFFFFF] flex flex-col justify-center items-center gap-15">
      <h1 className="font-bold text-[37px] text-[#373737]">Our Services</h1>
      <p className="font-medium text-[20px] text-[#7D7D7D] w-[70%] flex justify-center items-center">
        Executive Trade International is an University Application Centre,
        guiding Bangladeshi students to Australian, British, Canadian and Irish
        universities!
      </p>
      <div className="flex flex-wrap gap-10 justify-center">
        <ServicesCard
          colorIcon={"#717CFF"}
          textHead={"Career Counselling"}
          textTitle={
            "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum "
          }
        />
        <ServicesCard
          colorIcon={"#717CFF"}
          textHead={"University Admissions"}
          textTitle={
            "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum "
          }
        />
        <ServicesCard
          colorIcon={"#000000"}
          textHead={"Visa Consultancy"}
          textTitle={
            "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum "
          }
        />
        <ServicesCard
          colorIcon={"#5C96FF"}
          textHead={"Accommodation"}
          textTitle={
            "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum "
          }
        />
        <ServicesCard
          colorIcon={"#FA706C"}
          textHead={"Pre-Departure Briefing"}
          textTitle={
            "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum "
          }
        />
      </div>
    </div>
  );
}

export default Services;
