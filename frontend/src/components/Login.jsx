import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../store/actions/authAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from "../store/types/authType";

const Login = () => {
  const navigate = useNavigate();

  const alert = useAlert();

  const { loading, authenticate, error, successMessage, myInfo } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const [state, setState] = useState({
    userName: "",
  });

  const inputHendle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(userLogin(state));
  };

  useEffect(() => {
    if (authenticate) {
      navigate("/");
    }
    if (successMessage) {
      alert.success(successMessage);
      dispatch({ type: SUCCESS_MESSAGE_CLEAR });
    }
    if (error) {
      error.map((err) => alert.error(err));
      dispatch({ type: ERROR_CLEAR });
    }
  }, [successMessage, error]);

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
        </div>

        <div className="card-body">
          <form onSubmit={login}>
            <div className="form-group">
              <label htmlFor="username">Seu Nome</label>
              <input
                type="text"
                onChange={inputHendle}
                name="userName"
                value={state.userName}
                className="form-control"
                placeholder="Seu Nome"
                id="username"
              />
            </div>

            <div className="form-group">
              <input type="submit" value="entrar" className="btn" />
            </div>

            <div className="form-group">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
