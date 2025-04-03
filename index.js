import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { InternetProvider } from './src/hook/InternetProvider';
import { Provider as PaperProvider } from "react-native-paper";

// console.log("InternetProvider:", InternetProvider);

const Root = () => (
  <>
     <PaperProvider>
    <InternetProvider>
      <App />
    </InternetProvider>
    </PaperProvider>
    </>
  );
  AppRegistry.registerComponent(appName, () => Root);
 