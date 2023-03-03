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
    
    fallbackLng: "en_US",
    detection :{
      
      order: ['localStorage','cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']   
    },


    backend :{
      loadPath: '/assests/locales/{{lng}}/translations.json'
    },

    react:{
      useSuspense: false
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


