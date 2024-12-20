import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";

const App: React.FC = () => {
	const LoadHomePage = lazy(() => import("./containers/HomePage"));

	const LoadingFallback: React.FC = () => <div>Loading...</div>;

	return (
		<Layout>
			<Suspense fallback={<LoadingFallback />}>
				<Routes>
					<Route path="/" Component={LoadHomePage} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>
		</Layout>
	);
};

export default App;
