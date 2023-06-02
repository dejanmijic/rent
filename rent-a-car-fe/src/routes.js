import RegisterPage from "./views/Register";
import HomePage from "./views/Home";

export default [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/register", component: RegisterPage },
];
