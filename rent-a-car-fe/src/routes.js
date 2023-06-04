import RegisterPage from "./views/Register";
import LoginPage from "./views/LogIn";
import HomePage from "./views/Home";
import ProfilePage from "./views/Profile";

export default [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "/profile",
        component: ProfilePage,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  { path: "/register", component: RegisterPage },
  { path: "/log-in", component: LoginPage },
];
