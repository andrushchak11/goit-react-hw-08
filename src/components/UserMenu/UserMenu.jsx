import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
