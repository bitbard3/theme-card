import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/16/solid";
import { useTheme } from "../contexts/Theme";
import { useState } from "react";

export const Button = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { theme, lightMode, darkMode } = useTheme();
  if (darkTheme) {
    darkMode();
  } else {
    lightMode();
  }
  return (
    <button onClick={() => setDarkTheme(!darkTheme)}>
      {darkTheme ? (
        <MoonIcon className="h-8 w-8 text-primary"></MoonIcon>
      ) : (
        <SunIcon className="h-8 w-8 text-accent" />
      )}
    </button>
  );
};
