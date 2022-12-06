import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userLogout } from '../store/actions/authAction'

const Logout = () => {

  const [hide, setHide] = useState(true);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  }

  return (
    <>
    <div className="body">
      <div onClick={logout} className='logout'>
        <button><FaSignOutAlt /> Logout </button>
      </div>

      <div className={hide ? "theme_logout" : "theme_logout_show"}>
        <h2>Dark Mode</h2>
      </div>

      <div>
        <div className="on">
          <label htmlFor="dark">ON</label>
          <input type="radio" value="dark" name="theme" id="dark" />
        </div>

        <div className="of">
          <label htmlFor="white">OFF</label>
          <input type="radio" value="white" name="theme" id="white" />
        </div>
        </div>

      </div>
    </>
  );
};

export default Logout;
