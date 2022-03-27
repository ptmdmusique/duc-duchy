import { pathInfoMap, pathMap } from "data/routes/routes";
import { useStoreRehydrated } from "easy-peasy";
import { useManageI18n, useManageTheme } from "hooks";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "styles/main.scss";
import "styles/theme.scss";
import { initializeIconList } from "utils/icons/init";
import "./App.scss";

initializeIconList();

const LoadingView = () => {
  return <div>Loading...</div>;
};

function App() {
  const isHydrated = useStoreRehydrated();

  useManageTheme();
  useManageI18n();

  if (!isHydrated) {
    return <LoadingView />;
  }

  return (
    <Suspense fallback={<LoadingView />}>
      <Routes>
        {pathInfoMap.map(({ path, Component }) => (
          <Route key={path} path={pathMap[path]} element={<Component />} />
        ))}

        <Route path="*" element={<Navigate to={pathMap.home} replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
