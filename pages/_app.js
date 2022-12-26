import { AuthProvider } from "@/lib/zustandAuth";
import { useHydrate } from "@/store/authStore";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps, initData }) {
  const store = useHydrate(initData);
  return (
    <AuthProvider store={store}>
      {" "}
      <Component {...pageProps} />{" "}
    </AuthProvider>
  );
}

export default MyApp;
