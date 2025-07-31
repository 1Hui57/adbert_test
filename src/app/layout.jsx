import "../global.css";

export const metadata = {
  title: "ADBERT_TEST",
  description: "ADBERT_TEST",
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
