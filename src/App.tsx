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
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/room">
          <RoomPage />
        </Route>
        <Route path="/custom-furniture">
          <FurniturePage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </div>
);
