import 'server-only';

type Dictionaries = {
  [key: string]: () => Promise<any>;
};

const dictionaries: Dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
};

const getDictionary = (locale: string) => {
  return dictionaries[locale]();
};

export default getDictionary;
