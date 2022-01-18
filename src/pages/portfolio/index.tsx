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
        <h1>Декорирование интерьера</h1>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <button>Смотреть все проекты</button>
        <h1>Дизайн интерьера</h1>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <div className="portfolioPage__block">
          <Link to="/room">
            <img src={work} alt="work" />
          </Link>
          <span>Описание особенностей-текст</span>
        </div>
        <button>Смотреть все проекты</button>
      </main>
      <Footer />
    </div>
  );
};
