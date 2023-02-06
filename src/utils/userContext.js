import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummy Name",
    email: "dummy@gmail.com",
  },
});

// to give a name to our context
userContext.displayName = "userContext";

export default userContext;
