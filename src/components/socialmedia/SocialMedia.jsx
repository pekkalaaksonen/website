import React from "react";
import { SocialMediaItems } from "./SocialMediaItems";

export default function SocialMedia() {
  return (
    <ul className="flex justify-between pr-[15%] pl-[15%]">
      {SocialMediaItems.map((item, i) => {
        return (
          <li key={i} className="w-[4vw] fill-[#bb9d05] hover:fill-[#ffe45d] hover:scale-110 origin-center transition-all">
            <a  href={item.url} target="new">
              {item.logo}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
