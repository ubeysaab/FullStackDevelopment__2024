import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";


function App() {
  return (
    <Provider store={store}>
        <h1>
          redux toolkit
        </h1>
        <Navbar/>
        <CartContainer/>

    </Provider>
  )
}
export default App;
