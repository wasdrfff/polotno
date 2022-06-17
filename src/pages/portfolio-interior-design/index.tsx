import { CardDesign } from "../../components/card-design";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./style.scss";
import photo from "../main/assets/images/IMG_3.jpg";
import photo1 from "../main/assets/images/IMG_26.jpg";
export const PortfolioInteriorDesignPage = () => {
  return (
    <div>
      <Header />
      <div className="portfolio-interior-design-page">
        <p className='portfolio-interior-design-page__title'>дизайн интерьера</p>
        <div className="portfolio-interior-design-page__blocks">
          <CardDesign
            title="Квартира в Екатеринбурге,167 кв.м"
            photo={photo}
            projectId="1"
          />
          <CardDesign
            title="Офис в Екатеринбурге,145 кв.м"
            photo={photo1}
            projectId="2"
          />
          <CardDesign title="Дом в Сочи,367 кв.м" photo={photo} projectId="3" />
          <CardDesign
            title="Квартира в Екатеринбурге,90 кв.м"
            photo={photo1}
            projectId="4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
