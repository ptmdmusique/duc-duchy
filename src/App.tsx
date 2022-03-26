import { useStoreRehydrated } from "easy-peasy";
import { useManageI18n, useManageTheme } from "hooks";
import "styles/main.scss";
import "styles/theme.scss";
import { initializeIconList } from "utils/icons/init";
import "./App.scss";
import logo from "./logo.svg";

initializeIconList();

function App() {
  const isHydrated = useStoreRehydrated();

  useManageTheme();
  useManageI18n();

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-skin-success">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
