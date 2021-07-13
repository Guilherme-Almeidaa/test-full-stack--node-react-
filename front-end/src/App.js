import { BrowserRouter, Route, Switch } from "react-router-dom";
import Provider from './provider/Provider';
import PageBegin from "./pages/PageBegin";
import PageRegister from "./pages/PageRegister";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/Header";
import PageUpdate from "./pages/PageUpdate";

function App() {
  return (
    <div className="container">
      <Provider>
    <BrowserRouter>
      <Header/>
    <Switch>
      <Route exact path="/" component={PageBegin} />
      <Route path="/register" component={PageRegister} />
      <Route path="/employee/:id" render={(props) => <PageUpdate {...props} /> } />
    </Switch>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
