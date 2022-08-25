import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import GlobalTheme from "./GlobalTheme";

import {
  Landing,
  Error,
  Register,
  SharedLayout,
  ProtectedRoute,
  Cars,
} from "./pages";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <AppContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/cars"
                element={
                  <ProtectedRoute>
                    <Cars />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
