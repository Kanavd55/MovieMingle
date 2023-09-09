import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";

function App() {

  
  return (
    <div>
      <Provider store={appStore}>
      <Toaster/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
