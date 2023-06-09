import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
