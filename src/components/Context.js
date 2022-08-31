import { createContext, useState } from "react";

export const Toggler = createContext();

function Context({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <Toggler.Provider value={{ toggle, setToggle }}>
      {children}
    </Toggler.Provider>
  );
}

export default Context;
