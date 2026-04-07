# Getting Started

### Android

make sure jdk 17 is install and its path is mentioned in this file

> android\gradle.properties
> \/ this line needs to be added in this file /\

```sh
org.gradle.java.home=C:\\Program Files\\Java\\jdk-17
```

make sure contents are like that in file

> android\app\build.gradle

## Build and run your app

make sure android emulator is open and running
android studio > "three dots" > virtual device manager > run a emulator

```sh
npm run android
```

## building a debug APK

simply run the below command to build APK

```sh
npm run buildAndroid
cd android
./gradlew assembleDebug
```

then go to

> android/app/build/outputs/apk/debug/app-arm64-v8a-debug.apk

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).
The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
cd ios
bundle exec pod install
cd ..
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
npm run ios
# or
yarn ios
```
