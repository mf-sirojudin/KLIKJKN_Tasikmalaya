import AppRouter from "./router/AppRouter";

import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

export default App;