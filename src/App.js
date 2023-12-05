import { Suspense, lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import AuthContext, { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/pages/Home";
import MainContent from "./components/pages/MainContent";

const Login = lazy(() => import("./components/pages/Login"));
const Register = lazy(() => import("./components/pages/Register"));
const ByDate = lazy(() => import("./components/pages/ByDate"));
const Today = lazy(() => import("./components/pages/Today"));

const NavigateTo = ({ children, isAuth, requiresAuth = true }) => {
  const location = useLocation();
  if (requiresAuth) {
    if (isAuth) {
      return children;
    }
    
    const replaceUrl = location.pathname + location.search;
    return <Navigate to="/login" state={{ replaceUrl }} />;
  }

  return isAuth ? <Navigate to="/" /> : children;
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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/nasa-apod-web-app">
        <Suspense fallback={<></>}>
          <AppRoutes />
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
