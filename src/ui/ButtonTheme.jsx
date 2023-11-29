import { useDarkMode } from "../context/DarkModeContext";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import Button from "../ui/Button";

function ButtonTheme({ children, size = "medium" }) {
  const { theme, nextTheme } = useDarkMode();
  return (
    <Button variation="theme" size={size} onClick={nextTheme}>
      {theme === "system" && <HiComputerDesktop />}
      {theme === "light" && <FaRegSun />}
      {theme === "dark" && <FaRegMoon />}
      {children}
    </Button>
  );
}

export default ButtonTheme;
