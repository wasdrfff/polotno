import { CardDesign } from "../../components/card-design";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./style.scss";
import { projects } from "./data";

export const PortfolioInteriorDesignPage = () => {
  return (
    <div>
      <Header />
      <div className="portfolio-interior-design-page">
        <div className="portfolio-interior-design-page__blocks">
          {projects.map(({ title, plan, blueprint, id }) => (
            <CardDesign
              key={id}
              title={title}
              plan={plan}
              blueprint={blueprint}
              projectId={id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
