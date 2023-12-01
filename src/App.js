import "./App.css";
import { Suspense, lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthContext, { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/pages/Home";
import MainContent from "./components/pages/MainContent";
import { appendToBaseUrl } from "./utils/router";

const Login = lazy(() => import("./components/pages/Login"));
const Register = lazy(() => import("./components/pages/Register"));
const ByDate = lazy(() => import("./components/pages/ByDate"));
const Today = lazy(() => import("./components/pages/Today"));

const NavigateTo = ({ children, isAuth, requiresAuth = true }) => {
  if (requiresAuth) {
    return isAuth ? children : <Navigate to={appendToBaseUrl("/login")} replace={true} />;
  }

  return isAuth ? <Navigate to={appendToBaseUrl("/")} replace={true} /> : children;
};

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path={appendToBaseUrl("/")} element={<MainContent />}>
        <Route index element={<HomePage />} />

        <Route
          path={appendToBaseUrl("/login")}
          element={
            <NavigateTo isAuth={isAuth} requiresAuth={false}>
              <Login />
            </NavigateTo>
          }
        />

        <Route
          path={appendToBaseUrl("/register")}
          element={
            <NavigateTo isAuth={isAuth} requiresAuth={false}>
              <Register />
            </NavigateTo>
          }
        />

        <Route
          path={appendToBaseUrl("/today")}
          element={
            <NavigateTo isAuth={isAuth}>
              <Today />
            </NavigateTo>
          }
        />

        <Route
          path={appendToBaseUrl("/date")}
          element={
            <NavigateTo isAuth={isAuth}>
              <ByDate />
            </NavigateTo>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to={appendToBaseUrl("/")} replace={true} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<></>}>
          <AppRoutes />
        </Suspense>
      </AuthProvider>
    </Router>
  );
};

export default App;
