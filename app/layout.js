import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "EmbeddedExpert.io",
  description:
    "Embedded Expert is the world's largest hardware programming courses platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
