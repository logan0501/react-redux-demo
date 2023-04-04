import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HooksCakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
