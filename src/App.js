import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import Ranking from "./components/aboutme/ranking/Ranking";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
// import Zoom from 'react-reveal/Zoom';
import Toolkit from "./components/aboutme/skills/Toolkit";
import LanguageContext from "./LanguageContext";

const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      certifications: "Certifications",
      blogs: "Blogs",
    },
    home: {
      greeting: "Hi There!",
      iam: "I'M",
      name: "RANDRIAMISAINA Tsiory",
      title: "Systems and Integration Engineer",
      description:
        "I develop and maintain IT environments while integrating applications and software modules to ensure reliable, high-performing and secure systems.",
    },
    typing: {
      strings: ["Networks and Systems Engineer", "DevOps Engineer"],
    },
    about: {
      heading: "About me",
      who: "Who am I?",
      whoText:
        "I am a Systems and Integration Engineer specializing in infrastructure and software integration. I optimize systems to be reliable, scalable, and secure.",
      background: "My background",
      backgroundText:
        "As a Telecommunications Engineer with a specialization in networks and systems, I strengthened my skills through professional experience and my master’s studies in Computer Science at the University of Montpellier. This combination allows me to contribute both to infrastructure and software integration.",
      professional: "Professional status",
      availability: "Availability: Immediate",
      address: "Address: Montpellier, France",
      mobility: "Mobility: France / abroad",
      languages: "Languages",
      french: "French",
      frenchLevel: "Fluent",
      english: "English",
      englishLevel: "Technical",
      malagasy: "Malagasy",
      malagasyLevel: "Native",
    },
    aboutNav: {
      about: "About",
      skills: "Skills",
      journey: "Journey",
      ranking: "Ranking",
      socialMedia: "Social Media",
    },
    projects: {
      title: "Projects",
      viewAll: "View All",
    },
    socialMedia: {
      title: "Connect with me",
    },
    footer: {
      designedBy: "Designed and Developed by RANDRIAMISAINA Tsiory",
      copyright: "Copyright ©",
    },
    skills: {
      personalTitle: "Personal Skills",
      technicalTitle: "Technical Skills",
      toolkitTitle: "Tools I Use",
      personalButton: "Personal Skill",
      technicalButton: "Technical Skill",
      toolkitButton: "Toolkit",
    },
    contact: {
      heading: "Contact me",
      fullName: "Full Name",
      emailAddress: "Email address",
      message: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter email",
      placeholderMessage: "Enter message",
      submit: "Submit",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      resume: "CV",
      certifications: "Certifications",
      blogs: "Blogs",
    },
    home: {
      greeting: "Bonjour !",
      iam: "JE SUIS",
      name: "RANDRIAMISAINA Tsiory",
      title: "Ingénieur Systèmes et Intégration",
      description:
        "Je développe et maintiens des environnements informatiques tout en intégrant des applications et modules logiciels, afin de garantir des systèmes fiables, performants et sécurisés.",
    },
    typing: {
      strings: ["Ingénieur Réseaux et Systèmes", "Ingénieur DevOps"],
    },
    about: {
      heading: "À propos",
      who: "Qui suis-je ?",
      whoText:
        "Je suis Ingénieur Systèmes et Intégration, spécialisé dans l'infrastructure et l'intégration logicielle. J'optimise les systèmes pour qu'ils soient fiables, évolutifs et sécurisés.",
      background: "Mon parcours",
      backgroundText:
        "En tant qu'Ingénieur en Télécommunications spécialisé en réseaux et systèmes, j'ai renforcé mes compétences grâce à une première expérience professionnelle et à mon master en informatique à l'Université de Montpellier. Cette combinaison me permet d'intervenir à la fois sur l'infrastructure et l'intégration logicielle.",
      professional: "Statut professionnel",
      availability: "Disponibilité : Immédiate",
      address: "Adresse : Montpellier, France",
      mobility: "Mobilité : France / à l'étranger",
      languages: "Langues",
      french: "Français",
      frenchLevel: "Courant",
      english: "Anglais",
      englishLevel: "Technique",
      malagasy: "Malagasy",
      malagasyLevel: "Langue maternelle",
    },
    aboutNav: {
      about: "Profil",
      skills: "Compétences",
      journey: "Parcours",
      ranking: "Classement",
      socialMedia: "Réseaux sociaux",
    },
    projects: {
      title: "Projets",
      viewAll: "Voir tout",
    },
    socialMedia: {
      title: "Contactez-moi",
    },
    footer: {
      designedBy: "Conçu et développé par RANDRIAMISAINA Tsiory",
      copyright: "Droits d'auteur ©",
    },
    skills: {
      personalTitle: "Compétences personnelles",
      technicalTitle: "Compétences techniques",
      toolkitTitle: "Outils que j'utilise",
      personalButton: "Compétences personnelles",
      technicalButton: "Compétences techniques",
      toolkitButton: "Boîte à outils",
    },
    contact: {
      heading: "Contactez-moi",
      fullName: "Nom complet",
      emailAddress: "Adresse e-mail",
      message: "Message",
      placeholderName: "Entrez votre nom",
      placeholderEmail: "Entrez l'e-mail",
      placeholderMessage: "Entrez votre message",
      submit: "Envoyer",
    },
  },
};

function App() {
  const [load, updateLoad] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <MyNav />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<About />}></Route>
              <Route path="personalskill" element={<PersonalSkill />} />
              <Route path="technicalskill" element={<TechnicalSkill />} />
              <Route path="technicaljourney" element={<TechnicalJourney />} />
              <Route path="projectjourney" element={<ProjectJourney />} />
              <Route
                path="educationjourney"
                element={<EducationJourney />}
              ></Route>
              <Route
                path="experiencejourney"
                element={<ExperienceJourney />}
              ></Route>
              <Route path="ranking" element={<Ranking />}></Route>
              <Route path="socialmedia" element={<SocialMedia />}></Route>
              <Route path="toolkit" element={<Toolkit />}></Route>
            </Route>
            <Route path="/projectspage" element={<ProjectPage />} />
            <Route path="/certificatepage" element={<CertificatePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<ComingSoon />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
