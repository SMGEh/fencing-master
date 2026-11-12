import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Master from "./pages/Master";
import Locations from "./pages/Locations";
import History from "./pages/History";
import Books from "./pages/Book";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="master" element={<Master />} />
        <Route path="locations" element={<Locations />} />
        <Route path="history" element={<History />} />
        <Route path="books" element={<Books />} />
      </Route>
    </Routes>
  );
}
