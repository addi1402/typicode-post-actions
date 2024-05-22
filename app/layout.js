import RootClient from "./client";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Typicode Actions",
  description: "Practice Next Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootClient>
          <Header />
          {children}
        </RootClient>
      </body>
    </html>
  );
}
