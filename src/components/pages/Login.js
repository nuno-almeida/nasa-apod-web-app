import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertStatus from "../utils/AlertStatus";
import AuthContext from "../../contexts/AuthContext";
import Loading from "../utils/Loading";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [status, setStatus] = useState({
    loading: false,
    done: false,
    ok: false,
    message: "",
  });

  const onClickHandler = () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    login({ user, pass }).then((resp) =>
      resp.ok
        ? navigate("/")
        : setStatus((prev) => ({
            ...prev,
            loading: false,
            ok: false,
            done: true,
            message: resp.message,
          }))
    );
  };

  const onUserChangeHandler = (value) => {
    setStatus((prev) => ({ ...prev, done: false }));
    setUser(value);
  };

  const onPassChangeHandler = (value) => {
    setStatus((prev) => ({ ...prev, done: false }));
    setPass(value);
  };

  return (
    <div className="w-100 d-flex justify-content-center py-4">
      <div className="d-flex flex-column gap-2  w-50">
        <label>User</label>
        <input
          type="text"
          value={user}
          onChange={(e) => onUserChangeHandler(e.target.value)}
        />

        <label>Pass</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => onPassChangeHandler(e.target.value)}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClickHandler()}
        >
          {status.loading ? <Loading /> : "Login"}
        </button>

        {status.done && <AlertStatus ok={status.ok} message={status.message} />}
      </div>
    </div>
  );
};

export default Login;
