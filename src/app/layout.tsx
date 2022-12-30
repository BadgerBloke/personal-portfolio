import { ThemeContextProvider } from "store";
import "../styles/globals.css";
import Footer from "./include/footer";
import Navbar from "./include/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head />
            <ThemeContextProvider>
                <body className="w-full overflow-x-hidden text-sm transition-colors duration-300 ease-in-out font-bodyFont bg-body text-text lg:text-base">
                    <Navbar />
                    <main className="flex flex-col w-full max-w-5xl px-8 mx-auto overflow-x-hidden lg:mt-16 lg:px-0">
                        {children}
                    </main>
                    <Footer />
                </body>
            </ThemeContextProvider>
        </html>
    );
};

export default RootLayout;
