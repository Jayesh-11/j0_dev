import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./components/Home/Home";
import BlogList from "./components/Blog/BlogList.mdx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
