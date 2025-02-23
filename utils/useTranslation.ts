import translations from '../translations';
import useLanguageStore from '../store/useLanguageStore';

const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  return translations[language] || translations.en;
};

export default useTranslation;
