import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact-link";
import { FurniturePage } from "./pages/custom-furniture";
import { DecorPage } from "./pages/decor";
import { ManufacturingPage } from "./pages/furniture-manufacturing";
import { InteriorDesign } from "./pages/interior-design";
import { MainPage } from "./pages/main-page";
import { MaterialPage } from "./pages/material-name";
import { DecorationPage } from "./pages/decoration-page";
import { QuestionnairePage } from "./pages/questionnaire";
import { RoomPage } from "./pages/room";
import { InteriorDecorationPage } from "./pages/interior-decoration-page";
import { InteriorsPage } from "./pages/interiors-page";
import { PlanPage } from "./pages/interiors-page/pages-interiors/plan";
import { BlueprintPage } from "./pages/interiors-page/pages-interiors/blueprint";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BreadCrumbs } from "./components/bread-crumbs";
import { Container } from "./app-styled";

export const App = () => (
  <Router>
    <Header />
    <Container>
      <BreadCrumbs />
    </Container>
    <Switch>
      <Route path="/questionnaire">
        <QuestionnairePage />
      </Route>
      <Route path="/services/interior-decoration">
        <InteriorDecorationPage />
      </Route>
      <Route path="/brand-name">
        <MaterialPage />
      </Route>
      <Route path="/decor">
        <DecorPage />
      </Route>
      <Route path="/services/interior-design" exact>
        <InteriorDesign />
      </Route>
      <Route path="/services/furniture-manufacturing">
        <ManufacturingPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/decoration" exact>
        <DecorationPage />
      </Route>
      <Route path="/interiors" exact>
        <InteriorsPage />
      </Route>
      <Route path="/portfolio/room">
        <RoomPage />
      </Route>
      <Route path="/custom-furniture">
        <FurniturePage />
      </Route>
      <Route path="/interiors/plan-:id">
        <PlanPage />
      </Route>
      <Route path="/interiors/blueprint-:id">
        <BlueprintPage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
