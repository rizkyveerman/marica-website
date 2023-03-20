import "@/styles/globals.css";
import { Nunito_Sans, Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
