import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const [theme, setTheme] = useState("light");
  const darkMode = () => {
    setTheme("dark");
  };
  const lightMode = () => {
    setTheme("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider value={{ theme, darkMode, lightMode }}>
        <div className="">
          <div className="flex justify-center items-center h-screen">
            <Card></Card>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
