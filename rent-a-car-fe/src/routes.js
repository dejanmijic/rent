import RegisterPage from "./views/Register";
import LoginPage from "./views/LogIn";
import HomePage from "./views/Home";
import ProfilePage from "./views/Profile";

export default [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/register", component: RegisterPage },
  { path: "/log-in", component: LoginPage },
  { path: "/profile", component: ProfilePage },
];
