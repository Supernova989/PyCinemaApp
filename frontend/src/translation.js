import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';

i18n
	.use(XHR)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en
			}
		},
		lng: 'en',
		fallbackLng: 'en',
		
		interpolation: {
			escapeValue: false
		}
	}, (err, t) => {if (err) {}});

export default i18n;
