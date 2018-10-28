import Dashboard from "views/Dashboard/Dashboard.jsx";
import Cadastrovagas from "views/Cadastrovagas/Cadastrovagas.jsx";
import Candidatos from "views/Candidatos/Candidatos.jsx";
import Login from "views/Login/Login.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var candidatos = [
  {
    path: "/dashboard",
    name: "Vagas",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/create",
    name: "Cadastro de Vagas",
    icon: "nc-icon nc-bank",
    component: Cadastrovagas
  },
  {
    path: "/candidatos",
    name: "Candidatos",
    icon: "nc-icon nc-bank",
    component: Candidatos
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: Login
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default candidatos;
