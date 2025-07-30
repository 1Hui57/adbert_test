import "../global.css";

export const metadata = {
  title: "ABDERT_TEST",
  description: "ABDERT_TEST",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
