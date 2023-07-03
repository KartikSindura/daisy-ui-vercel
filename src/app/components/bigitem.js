import NoSSR from "./NoSSR";

let options = [
  "col-span-2",
  "",
  "col-span-3",
  "row-span-3",
  "row-span-2",
  "col-span-2 row-span-2",
];
let base_string =
  "border-l-violet-700 border-2 h-full btn shadow-xl min-h-[80px] min-w-[80px] ";

function string_gen() {
  let x = Math.floor(Math.random() * options.length);
  let string = base_string.concat(options[x]);
  return string;
}
export default function BigItem() {

  return (
    <NoSSR>
      <div className="grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4 gap-x-2 gap-y-2 grid-flow-dense">
        {[...Array(20)].map((e, i) => {
          let string = string_gen();
          return <input type="checkbox" className={string} key={i} />;
        })}
      </div>
    </NoSSR>
  );
}
