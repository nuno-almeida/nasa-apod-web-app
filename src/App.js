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
import Loading from "./components/utils/Loading";

const Login = lazy(() => import("./components/pages/Login"));
const Register = lazy(() => import("./components/pages/Register"));
const ByDate = lazy(() => import("./components/pages/ByDate"));
const Today = lazy(() => import("./components/pages/Today"));

const NavigateTo = ({ children, isAuth, requiresAuth = true }) => {
  if (requiresAuth) {
    return isAuth ? children : <Navigate to="/login" replace={true} />;
  }

  return isAuth ? <Navigate to="/" replace={true} /> : children;
};

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route index element={<HomePage />} />

        <Route
          path="/login"
          element={
            <NavigateTo isAuth={isAuth} requiresAuth={false}>
              <Login />
            </NavigateTo>
          }
        />

        <Route
          path="/register"
          element={
            <NavigateTo isAuth={isAuth} requiresAuth={false}>
              <Register />
            </NavigateTo>
          }
        />

        <Route
          path="/today"
          element={
            <NavigateTo isAuth={isAuth}>
              <Today />
            </NavigateTo>
          }
        />

        <Route
          path="/date"
          element={
            <NavigateTo isAuth={isAuth}>
              <ByDate />
            </NavigateTo>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace={true} />} />
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
