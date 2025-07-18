import { Link, useLocation } from "react-router-dom";
import { Newspaper, Home } from "lucide-react";
import { cn } from "../../utils/cn";
import LogoNYT from "../../assets/logo";

export const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                            <Newspaper className="w-6 h-6 text-white" />
                        </div>
                        <div className="block">
                            <LogoNYT />

                            <h1 className="text-xl font-bold text-gray-900"></h1>
                            <p className="text-xs text-gray-500">
                                Discover stories that matter
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-1">
                        <Link
                            to="/"
                            className={cn(
                                "flex items-center space-x-2 px-4 py-2 rounded-lg",
                                "transition-all duration-200 font-medium",
                                isActive("/")
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            )}
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline">Home</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
