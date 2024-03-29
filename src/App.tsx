import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact-page";
import { ManufacturingPage } from "./pages/furniture-manufacturing-page";
import { InteriorDesignPage } from "./pages/interior-design-page";
import { MainPage } from "./pages/main-page";
import { DecorationPage } from "./pages/decoration-page";
import { QuestionnairePage } from "./pages/questionnaire-page";
import { InteriorDecorationPage } from "./pages/interior-decoration-page";
import { InteriorsPage } from "./pages/interiors-page";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BreadCrumbs } from "./components/bread-crumbs";
import { Container } from "./app-styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./variables";
import { InteriorDecorationSubPage } from "./pages/interior-decoration-sub-page";
import { InteriorsSubPage } from "./pages/interiors-page-sub-page";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Container>
        <BreadCrumbs />
      </Container>
      <Switch>
        <Route path="/questionnaire">
          <QuestionnairePage />
        </Route>
        <Route path="/services/interior-decoration/:subPage">
          <InteriorDecorationSubPage />
        </Route>
        <Route path="/services/interior-decoration">
          <InteriorDecorationPage />
        </Route>
        <Route path="/services/interior-design" exact>
          <InteriorDesignPage />
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
        <Route path="/interiors/:id">
          <InteriorsSubPage />
        </Route>

        <Route path="/interiors" exact>
          <InteriorsPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);
