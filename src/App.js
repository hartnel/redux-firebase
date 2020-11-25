import logo from "./logo.svg";
import "./App.css";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import { rrfProps, store } from "./firebase/main";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Todos></Todos>
      </ReactReduxFirebaseProvider> 
    </Provider>
  );
}

export default App;
