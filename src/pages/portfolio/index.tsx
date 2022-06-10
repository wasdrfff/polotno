import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import work from "../main/assets/images/IMG_3.jpg";
import "./style.scss";
export const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <Header />
      <main className="portfolioPage__main">
        <p>Декорирование интерьера текстилем</p>
        <div className="portfolioPage__block">
          <Link to="/portfolio/room">
            <img src={work} alt="work" />
          </Link>
          <span>гостиные</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>кухни,столовые</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>спальни,кабинеты</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>детские</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>другие помещения</span>
        </div>
        <button>смотреть портфолио дизайн интерьера</button>
      </main>
      <Footer />
    </div>
  );
};
