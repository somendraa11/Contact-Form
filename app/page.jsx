import Contact from "../src/components/Contact";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <ChakraProvider>
        <Contact />
      </ChakraProvider>
    </div>
  );
}
