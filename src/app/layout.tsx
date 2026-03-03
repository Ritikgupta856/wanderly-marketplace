import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modal/LoginModal";
import getCurrenUser from "./actions/getCurrentUser";
import RentModal from "./components/modal/RentModal";
import SearchModal from "./components/modal/SearchModal";
import Footer from "./components/Footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wanderly | Holiday rentals, cabins, beach houses & more",
  description: "Online homestay booking platform",

  icons: {
    icon: "/images/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrenUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        <div className="pb-20 pt-32">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
