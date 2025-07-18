import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { cn } from "../../utils/cn";

interface LayoutProps {
    className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ className }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800 font-serif w-full align-center">
            {/* Sticky Header */}
            <Header />

            {/* Main content centered with max-width */}
            <main
                className={cn(
                    "flex-1 w-full max-w-4xl mx-auto px-4 py-10",
                    className
                )}
            >
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
