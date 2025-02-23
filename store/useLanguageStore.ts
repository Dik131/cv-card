import { create } from 'zustand'

interface LanguageState {
  language: string | null;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: null,
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
