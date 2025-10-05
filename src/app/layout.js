import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export const metadata = {
  title: "Movie App",
  description: "Next.js + Redux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
