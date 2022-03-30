import React, { Component } from "react";
import styles from "./Title.module.css";

class Title extends Component {
  render() {
    return <h1 className={styles.name}>Pekka Laaksonen</h1>;
  }
}

export default Title;