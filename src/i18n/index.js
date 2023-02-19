import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../Langs/uz.json";
import rus from "../Langs/rus.json";

i18next.use(initReactI18next).init({
	resources: {
		uz: {
			translation: uz,
		},
		rus: {
			translation: rus,
		},
	},
	Langs: localStorage.getItem("Langs") || "uz",
});

export default i18next;