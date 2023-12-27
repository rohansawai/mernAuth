import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginScreen from "./screens/LoginScreen.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.ts";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/register" element={<RegisterScreen />}></Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />{" "}
    </React.StrictMode>
  </Provider>
);
