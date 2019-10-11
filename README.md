# React-Native-Tut

react-native init MyApp --version "0.53.0"

yarn add react-navigation@2.0

yarn add native-base@2.4 --save

react-native link react-native-vector-icons

react-native run-ios --simulator="iPhone 7"

# Clear Cache

cd android

gradlew clean

cd ..

rmdir /s node_modules

yarn cache clean

npm cache clean --force

npm install

npm update

npm audit fix --force

react-native link

npm start -- --reset-cache

# Office

Office PC Setup

  react-native init RedCrow

  npm install native-base --save

  npm install

Run the below command 2 Times

  react-native link

Run the below command 2 Times

  yarn add react-navigation

  yarn add react-native-gesture-handler
  
  react-native link react-native-gesture-handler
  
  react-native run-android

# Batch for clear cache

@ECHO OFF
ECHO Congratulations! Your first batch file executed successfully.
set root=C:\Mobile\Test\android
set rootOneLevelUp=C:\Mobile\Test\
CD /D %root%
Echo %root%
call gradlew clean
call CD /D %rootOneLevelUp%
call Echo %rootOneLevelUp%
call yarn cache clean
call npm cache clean --force
call npm start --reset-cache && echo "moin"
Pause

  
axios
moment
native-base
react-native-gesture-handler
react-native-image-crop-picker
react-native-vector-icons
react-native-video
react-native-webview
react-navigation
realm


