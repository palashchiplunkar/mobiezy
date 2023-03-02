import React from 'react';
import ReactDOM from 'react-dom/client';


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from './App';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
    
    
    fallbackLng: "en_US",
    detection :{
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend :{
      loadPath: '/assests/locales/{{lng}}/translations.json'
    },
    react:{
      useSuspense: false
    }
    // have a common namespace used around the full app
  

  });
// function App(){
//   const { t, i18n } = useTranslation();
//   return (
//     <div className="App">
//       <h2>{t('LP_lbl_UserName')}</h2>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


