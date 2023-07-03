"use client";
import Image from "next/image";
import Item from "./components/item";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import NoSSR from "./components/NoSSR";
import { useEffect, useState, useMemo } from "react";
import BigItem from "./components/bigitem";

export default function Home() {
  return (
    <>
        <div className="p-12">
          {/* {[...Array(10)].map((e, i) => {
             let x = Math.random();
            if (x < 0.33) {
              return <Item />;
            } else if (x > 0.33 && x < 0.66) {
              return <Item2 />;
            } else {
              return <Item3 />;
            }
          })} */}
          <BigItem />
        </div>
    </>
  );
}
