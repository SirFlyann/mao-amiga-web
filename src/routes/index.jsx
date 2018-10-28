import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Candidatos from "layouts/Candidatos/Candidatos.jsx";

var indexRoutes = [
  { path: "/candidatos/:id", name: "Candidatos", component: Candidatos },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
