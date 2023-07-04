import Navbar from "./components/Navbar/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="halloween" id="html">
      <body className="min-h-screen max-w-screen">
        <Navbar />
        <div>{children}</div>
        {/* <div className="grid grid-cols-3">
          <div></div>
          <Navbar />
          <div className="col-span-full">{children}</div>
        </div> */}
      </body>
    </html>
  );
}
