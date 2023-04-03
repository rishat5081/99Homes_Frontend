import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const token = localStorage.getItem("currentUsertoken")
    axios.defaults.headers["Authorization"] =  token;
  }
  axios.defaults.baseURL = "http://localhost:5000";
  
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
