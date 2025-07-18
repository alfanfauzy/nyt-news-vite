import { Routes, Route } from "react-router-dom";
import { ArticleListPage } from "../pages/ArticleList";
import { ArticleDetailPage } from "../pages/ArticleDetail";
import { Layout } from "../components/layout/Layout";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ArticleListPage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
            </Route>
        </Routes>
    );
};
