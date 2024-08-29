import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import ToasterProvider from "@/providers/toaster-provider";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ClientThemeWrapper from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-TripPlanner",
  description:
    "AI-TripPlanner: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation and more!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} h-screen overflow-hidden`}>
          <ThemeProvider>
            <ClientThemeWrapper>
              <ToasterProvider>{children}</ToasterProvider>
            </ClientThemeWrapper>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
