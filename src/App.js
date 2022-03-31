import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./page/Category";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter basename="JeongKimCook">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          {/* <Route path="/diary/:id" element={<Diary />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
