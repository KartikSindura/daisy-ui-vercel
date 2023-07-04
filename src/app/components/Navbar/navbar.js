"use client";
import { useState } from "react";
import "../../layout";

const items = [
  {
    icon: "",
    theme: "light",
  },
  {
    icon: "",
    theme: "dark",
  },
  {
    icon: "",
    theme: "cupcake",
  },
  {
    icon: "",
    theme: "emerald",
  },
  {
    icon: "",
    theme: "corporate",
  },
  {
    icon: "",
    theme: "synthwave",
  },
  {
    icon: "",
    theme: "retro",
  },
  {
    icon: "",
    theme: "cyberpunk",
  },
  {
    icon: "",
    theme: "valentine",
  },
  {
    icon: "",
    theme: "halloween",
  },
  {
    icon: "",
    theme: "garden",
  },
  {
    icon: "",
    theme: "forest",
  },
  {
    icon: "",
    theme: "aqua",
  },
  {
    icon: "",
    theme: "lofi",
  },
  {
    icon: "",
    theme: "pastel",
  },
  {
    icon: "",
    theme: "fantasy",
  },
  {
    icon: "",
    theme: "wireframe",
  },
  {
    icon: "",
    theme: "black",
  },
  {
    icon: "",
    theme: "luxury",
  },
  {
    icon: "",
    theme: "dracula",
  },
];

export default function Navbar() {
  const [index, setIndex] = useState(0);
  return (
    <div className="navbar bg-base-100 col-span-full">
      <div className="navbar-start">
        <div className="dropdown drop-shadow-2xl">
          <label tabindex="0" class="btn btn-ghost btn-circle drop-shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
              <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
              <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
              <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {[...Array(items.length)].map((e, i) => {
              return (
                <li>
                  <a
                    className="m-1"
                    id={i}
                    onClick={(f) => {
                      document
                        .getElementById("html")
                        .setAttribute("data-theme", items[i].theme);
                      document
                        .getElementById(index)
                        .setAttribute("class", "m-1");
                      document
                        .getElementById(i)
                        .setAttribute("class", "active m-1 btn-outline");
                      setIndex(i);
                    }}
                  >
                    {items[i].theme}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end"></div> */}
      <div className="navbar-center"></div>
      <div className="navbar-end"></div>
    </div>
  );
}
