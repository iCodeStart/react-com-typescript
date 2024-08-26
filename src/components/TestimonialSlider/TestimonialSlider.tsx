import ProfileImg from "../../assets/profile.svg";
import { TestimonialCard } from "./components";
import "./TestimonialSlider.scss";

export function TestimonialSlider() {
  const testimonialCardInfo = [
    {
      name: "Fulano de tal code start",
      description: "Lorem Ipsum is simply dummy text of the printing and in.",
      occupation: "CEO da Code Start 1",
      imgProfile: ProfileImg,
      highlighted: false,
    },
    {
      name: "Fulano de tal code start 2",
      description: "Otimizando o codigo",
      occupation: "CEO da Code Start 2",
      imgProfile: ProfileImg,
      highlighted: true,
    },
    {
      name: "Fulano de tal code start 2",
      description: "Otimizando o codigo",
      occupation: "CEO da Code Start 2",
      imgProfile: ProfileImg,
      highlighted: true,
    },
  ];

 
  function handleClick(event: React.MouseEvent<HTMLDivElement>){
    console.log(event, 'Seta de retroceder foi clicada')
  }

  function handleNextArrowClick(event: React.MouseEvent<HTMLDivElement>){
    console.log(event, 'Seta de avançar foi clicada')
  }

  return (
    <section id="testimonial">
      <div className="container">
        <div className="header-section">
          <h1 className="title">Depoimentos</h1>
          <h2 className="subtitle">Recomendações sobre o meu trabalho</h2>
        </div>
        <div className="info-testimonial">
          <div className="controls-testimonials">
            <div className="prev-testimonial" onClick={handleClick}> {"<"} </div>
            <div className="next-testimonial" onClick={handleNextArrowClick}> {">"} </div>
          </div>
        </div>
        <div className="container-testimonials">
          {testimonialCardInfo.map((cardInfo, index) => {
            return (
              <TestimonialCard
                key={index}
                name={cardInfo.name}
                occupation={cardInfo.occupation}
                description={cardInfo.description}
                imgProfile={cardInfo.imgProfile}
                highlighted={cardInfo.highlighted}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
