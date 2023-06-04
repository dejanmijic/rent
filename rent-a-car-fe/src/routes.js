import RegisterPage from "./views/Register";
import LoginPage from "./views/LogIn";
import HomePage from "./views/Home";
import ProfilePage from "./views/Profile";
import ObjectsPage from "./views/Objects";

export default [
  {
    path: "/",
    component: HomePage,
    redirect: function () {
      return "/objects";
    },
    children: [
      {
        path: "/objects",
        component: ObjectsPage,
      },
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
