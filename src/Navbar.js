import React, { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState("All");
  const [repos, setRepos] = useState(null);

  const updateLanguage = language => {
    setSelectedLang(language);
  };

  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  const items = languages.map((language, index) => {
    return (
      <ul key={index}>
        <button
          onClick={() => updateLanguage(language)}
          style={language === selectedLang ? { color: "red" } : null}
        >
          {language}
        </button>
      </ul>
    );
  });

  return <div className="flex-center">{items}</div>;
};

export default Navbar;
