import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { InternetProvider } from './src/hook/InternetProvider';
console.log("InternetProvider:", InternetProvider);

const Root = () => (
  <>
    <InternetProvider>
      <App />
    </InternetProvider>
    </>
  );
  AppRegistry.registerComponent(appName, () => Root);
 