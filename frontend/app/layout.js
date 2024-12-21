import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "./_app";
import { Header } from "@/Components";
import { ERC20Provider, StateContextProvider } from "@/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Token Generator",
  description: "Token Generator App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Web3Provider>
          <StateContextProvider>
            <Header />
            {children}
          </StateContextProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
