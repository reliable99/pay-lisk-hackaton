import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PayLisk",
  description: "Send token to your friends and family",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>{children}</body>

    </html>

  );
}
