import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { UsuarioProvider } from "./common/contexts/Usuario";
import { CarrinhoProvider } from "./common/contexts/Carrinho";
import { PagamentoProvider } from "./common/contexts/Pagamento";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9F85",
    },
    secondary: {
      main: "#FF7070",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <UsuarioProvider>
          <CarrinhoProvider>
            <PagamentoProvider>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
