import React from "react";
import styles from "./button.module.scss";
import { Link } from "react-scroll";

function Button(props) {
  return (
    <Link to="crew-list" smooth={true} className={styles.btn}>
      {props.btn_text}
    </Link>
  );
}

export default Button;
