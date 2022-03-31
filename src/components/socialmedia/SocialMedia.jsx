import React from "react";
import styles from "./SocialMedia.module.css";
import { SocialMediaItems } from "./SocialMediaItems";

export default function SocialMedia() {
  return (
    <ul className={styles["service-list"]}>
      {SocialMediaItems.map((item, i) => {
        return (
          <li key={i} className={styles["service-list-item"]}>
            <a href={item.url} target="new">
              {item.logo}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
