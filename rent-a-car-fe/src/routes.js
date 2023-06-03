import RegisterPage from "./views/Register";
import LoginPage from "./views/LogIn";
import HomePage from "./views/Home";

export default [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/register", component: RegisterPage },
  { path: "/log-in", component: LoginPage },
];
