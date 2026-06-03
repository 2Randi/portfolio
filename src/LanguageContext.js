import React from "react";

const LanguageContext = React.createContext({
  language: "en",
  switchLanguage: () => {},
  t: {},
});

export default LanguageContext;
