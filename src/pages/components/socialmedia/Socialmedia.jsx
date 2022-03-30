import React from "react";
import styles from "./SocialMedia.module.css";
import { SocialMediaItems } from "./SocialMediaItems";

export default function SocialMedia() {
  return (
    <div className={styles.socialmedia}>
      {SocialMediaItems.map((item, i) => {
        return (
          <div key={i} className={styles.logo}>
            <a href={item.url} target="new">
              {item.logo}
            </a>
          </div>
        );
      })}
    </div>
  );
}
