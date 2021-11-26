import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactsPage } from "./pages/contacts";
import { MainPage } from "./pages/main";
import { QuestionnairePage } from "./pages/questionnaire";

export const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/questionnaire">
          <QuestionnairePage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </div>
);
