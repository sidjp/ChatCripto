import React, { useState } from "react";

const Logout = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="icons">
        <div onClick={() => setHide(!hide)} className="icon">
          <button>Dark Mode</button>
        </div>

        <div className={hide ? "theme_logout" : "theme_logou_show"}>
          <h3>Dark Mode</h3>
        </div>
      </div>
    </>
  );
};

export default Logout;
