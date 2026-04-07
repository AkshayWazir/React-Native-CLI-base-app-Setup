import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/page/home';
import { DetailsScreen } from './src/page/details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SWRConfig } from "swr";
import { swrFetcher } from './src/utility/apiCaller';

enableScreens();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SWRConfig value={{ fetcher: swrFetcher, revalidateOnFocus: true, dedupingInterval: 5000, shouldRetryOnError: true, errorRetryCount: 2, errorRetryInterval: 2000 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <NavigationContainer>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </GestureHandlerRootView>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </SWRConfig>
  );
}

export default App;
