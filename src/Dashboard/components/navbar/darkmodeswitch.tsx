import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

export const DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return (
    <Switch
      isSelected={theme === "dark" ? true : false}
      onValueChange={(e: boolean) => setTheme(e ? "dark" : "light")}
    />
  );
};
