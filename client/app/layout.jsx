import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Sige Tech",
  description: "Robot-Centric Technology Startup",
  content: "Sigetech is a robot-centric technology startup that offers robotics-related courses, STEM Education and Product development consultation to Automate Your ...",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
      <body className={inter.className}>{children}</body>
  
    </html>
  );
}
