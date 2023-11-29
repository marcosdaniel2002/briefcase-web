import { createContext, useContext, useEffect, useState } from "react";

const ExtendNavbarContext = createContext();

function ExtendNavbarProvider({ children }) {
  const [isExtend, setIsExtend] = useState(false);

  function toggleExtendNavbar() {
    setIsExtend((isExtend) => !isExtend);
  }

  useEffect(
    function () {
      if (isExtend) {
        document.body.classList.add("scrollHidden");
      } else {
        document.body.classList.remove("scrollHidden");
      }
    },
    [isExtend]
  );

  return (
    <ExtendNavbarContext.Provider value={{ isExtend, toggleExtendNavbar }}>
      {children}
    </ExtendNavbarContext.Provider>
  );
}

function useExtendNavbar() {
  const context = useContext(ExtendNavbarContext);
  if (context === undefined)
    throw new Error(
      "ExtendNavbarContext was used outside of ExtendNavbarProvider!"
    );
  return context;
}

export { ExtendNavbarProvider, useExtendNavbar };
