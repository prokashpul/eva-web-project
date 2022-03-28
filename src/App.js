import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErroePage from "./components/ErrorPage/ErroePage";
import Header from "./components/Header/Header";
import Headercontent from "./components/Headercontent/Headercontent";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Headercontent></Headercontent>}></Route>
        <Route path="/shop" element={<Main></Main>} />
        <Route path="*" element={<ErroePage></ErroePage>} />
      </Routes>
    </div>
  );
}

export default App;
