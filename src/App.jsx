import "./App.css";
import { useRoutes } from "react-router-dom";
import BerandaPage from "./pages/beranda";
import DetailPage from "./pages/detail";

const routes = [
  { path: "/", element: <BerandaPage /> },
  { path: "/detail/:filmId", element: <DetailPage /> },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
