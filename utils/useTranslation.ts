import en from '../translations/en.json';
import ru from '../translations/ru.json';
import de from '../translations/de.json';
import useLanguageStore from '../store/useLanguageStore';

const translations: Record<string, typeof en> = { en, ru, de };

const useTranslation = () => {
  const language = useLanguageStore((state) => state.language) || 'en';
  return translations[language] || translations.en;
};

export default useTranslation;
