import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { useStore } from "../stores/redux";

import { Provider as ContextProvider } from "../stores/context";

import { Provider as ReducerProvider } from "../stores/reducer";

import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();

  return (
    <Provider store={store}>
      <ContextProvider>
        <ReducerProvider>
          <Header />
          <Component {...pageProps} />
        </ReducerProvider>
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
