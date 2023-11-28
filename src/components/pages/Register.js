import { useContext, useReducer, useState } from "react";
import AlertStatus from "../utils/AlertStatus";
import AuthContext from "../../contexts/AuthContext";
import Loading from "../utils/Loading";

const initialState = {
  pending: false,
  ok: true,
  message: "",
  done: false,
};

const reducer = (state, action) => {
  const { type } = action;

  if (type === "PENDING") {
    return {
      ...state,
      pending: true,
    };
  }

  if (type === "FULFILLED") {
    const { message } = action.payload;

    return {
      ...state,
      pending: false,
      ok: true,
      message,
      done: true,
    };
  }

  if (type === "REJECTED") {
    const { message } = action.payload;

    return {
      ...state,
      pending: false,
      ok: false,
      message,
      done: true,
    };
  }

  return state;
};

const Register = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [invalidConfirmPass, setInvalidConfirmPass] = useState(false);

  const { register } = useContext(AuthContext);

  const [state, dispacth] = useReducer(reducer, initialState);
  const { pending, ok, message, done } = state;

  const onClickHandler = () => {
    if (user.length < 3) {
      setInvalidUser(true);
    } else if (pass.length < 6) {
      setInvalidPass(true);
    } else if (pass !== confirmPass) {
      setInvalidConfirmPass(true);
    } else {
      dispacth({ type: "PENDING" });

      register({ user, pass })
        .then(() => {
          dispacth({
            type: "FULFILLED",
            payload: { message: "User registration succeeded" },
          });
        })
        .catch(() => {
          dispacth({
            type: "REJECTED",
            payload: { message: "User registration failed" },
          });
        });
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center py-4">
      <div className="d-flex flex-column gap-2  w-50">
        <label>User</label>
        <input
          type="text"
          value={user}
          onChange={(e) => {
            setInvalidUser(false);
            setUser(e.target.value);
          }}
        />
        {invalidUser && (
          <p className="text-danger small">
            Username should have at least 3 characters
          </p>
        )}

        <label>Pass</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            setInvalidPass(false);
            setPass(e.target.value);
          }}
        />
        {invalidPass && (
          <p className="text-danger small">
            Password should have at least 6 characters
          </p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPass}
          onChange={(e) => {
            setInvalidConfirmPass(false);
            setConfirmPass(e.target.value);
          }}
        />
        {invalidConfirmPass && (
          <p className="text-danger small">
            Confirm password not mach password
          </p>
        )}

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClickHandler()}
          disabled={pending || (done && ok)}
        >
          {pending ? <Loading /> : "Register"}
        </button>

        {done && <AlertStatus ok={ok} message={message} />}
      </div>
    </div>
  );
};

export default Register;
