import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../LanguageContext";

export default function Skills() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <div className="mt-4 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/personalskill">
          {t.skills.personalButton}
        </Link>
        <Link className="btn btn-primary" to="/technicalSkill">
          {t.skills.technicalButton}
        </Link>
      </div>
    </div>
  );
}
