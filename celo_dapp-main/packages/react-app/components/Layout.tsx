import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-4 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Layout;
