"use client";
import { useState } from "react";
import "../../layout";

const items = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default function Navbar() {
  const [index, setIndex] = useState(26);
  return (
    <div className="dropdown drop-shadow-2xl p-2" id="dropdown-menu">
      <label tabIndex="0" className="btn btn-ghost btn-circle drop-shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-width="1.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
          <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
          <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
          <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-2 z-[1] shadow bg-base-100 rounded-box w-96 h-96"
      >
        {[...Array(items.length)].map((e, i) => {
          if (i == index) {
            return (
              <li>
                <a className="active m-1" id={i}>
                  {items[i]}
                </a>
              </li>
            );
          } else {
            return (
              <li>
                <a
                  className="m-1"
                  id={i}
                  onClick={(f) => {
                    document
                      .getElementById("html")
                      .setAttribute("data-theme", items[i]);
                    document.getElementById(index).setAttribute("class", "m-1");
                    document
                      .getElementById(i)
                      .setAttribute("class", "active m-1 btn-outline");
                    setIndex(i);
                  }}
                >
                  {items[i]}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <div className="navbar-center"></div>
      <div className="navbar-end"></div>
    </div>
  );
}
