import React, { useState, useEffect, Suspense } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack } from 'expo-router';
import useLanguageStore from '../../store/useLanguageStore';
import LanguageModal from '../../components/ui/LanguageModal';

const LazyLoadedApp = React.lazy(() => import('./index')); // Lazy-loading главного экрана

const Layout: React.FC = () => {
  const language = useLanguageStore((state) => state.language);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (language) {
      setTimeout(() => setIsLoading(false), 1000); // Имитация задержки
    }
  }, [language]);

  return (
    <View style={{ flex: 1 }}>
      {/* Окно выбора языка, если язык не выбран */}
      <LanguageModal visible={!language} />

      {/* Основной контент загружается лениво */}
      {language && (
        <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
          {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <LazyLoadedApp />}
        </Suspense>
      )}
    </View>
  );
};

export default Layout;
