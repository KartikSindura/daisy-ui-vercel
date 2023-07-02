import Image from "next/image";
import Item from "./components/item";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import NoSSR from "./components/NoSSR";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
        <NoSSR>
          {[...Array(10)].map((e, i) => {
            let x = Math.random();
            if (x < 0.33) {
              return <Item />;
            } else if (x > 0.33 && x < 0.66) {
              return <Item2 />;
            } else {
              return <Item3 />;
            }
          })}
        </NoSSR>
      </div>
    </>
  );
}
