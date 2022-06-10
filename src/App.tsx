import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact-link";
import { FurniturePage } from "./pages/custom-furniture";
import { DecorPage } from "./pages/decor";
import { ManufacturingPage } from "./pages/furniture-manufacturing";
import { InteriorDesign } from "./pages/interior-design";
import { MainPage } from "./pages/main";
import { MaterialPage } from "./pages/material-name";
import { PortfolioPage } from "./pages/portfolio";
import { QuestionnairePage } from "./pages/questionnaire";
import { RoomPage } from "./pages/room";
import { ServicesDecoration } from "./pages/services";
import { PortfolioInteriorDesignPage } from "./pages/portfolio-interior-design";
import { PlanPage } from "./pages/portfolio-interior-design/pages-interior-design/plan";
import { BlueprintPage } from "./pages/portfolio-interior-design/pages-interior-design/blueprint";

export const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/questionnaire">
          <QuestionnairePage />
        </Route>
        <Route path="/services">
          <ServicesDecoration />
        </Route>
        <Route path="/brand-name">
          <MaterialPage />
        </Route>
        <Route path="/decor">
          <DecorPage />
        </Route>
        <Route path="/interior-design">
          <InteriorDesign />
        </Route>
        <Route path="/furniture-manufacturing">
          <ManufacturingPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/portfolio" exact>
          <PortfolioPage />
        </Route>
        <Route path="/portfolio/interiordesign" exact>
          <PortfolioInteriorDesignPage />
        </Route>
        <Route path="/portfolio/room">
          <RoomPage />
        </Route>
        <Route path="/custom-furniture">
          <FurniturePage />
        </Route>
        <Route path="/portfolio/interiordesign/plan/:id">
          <PlanPage />
        </Route>
        <Route path="/portfolio/interiordesign/blueprint/:id">
          <BlueprintPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </div>
);
