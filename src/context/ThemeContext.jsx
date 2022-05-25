import { createContext, useReducer } from "react";

const THEME_INITIAL_STATE = {
  darkMode: true,
};

export const ThemeContext = createContext(THEME_INITIAL_STATE);

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return { ...state, darkMode: !state.darkMode };
    }
    default: {
      return state;
    }
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
