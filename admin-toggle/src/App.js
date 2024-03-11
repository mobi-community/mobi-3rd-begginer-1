import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
