# ⚛️ React Native Template

This is a template repository for a cross-platform mobile application powered by [React Native](https://reactnative.dev) and [Expo](https://expo.dev).

## Features

- 🚀 **Modern Stack**: Built with [Expo](https://expo.dev), [React Native](https://reactnative.dev), and TypeScript for cross-platform mobile development
- 📱 **Cross-Platform**: iOS, Android, and Web support from a single codebase
- 🧭 **File-Based Routing**: [Expo Router](https://docs.expo.dev/router/introduction) for intuitive navigation
- 🎨 **UI/UX**:
  - [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated) for smooth animations
  - [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler) for native touch handling
  - [React Native Screens](https://github.com/software-mansion/react-native-screens) for native navigation primitives
  - [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) for device-safe layouts
- 🔄 **Over-the-Air Updates**: [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates) for instant deployments
- 🎬 **Splash Screen**: [Expo Splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen) for polished app startup
- 🛠️ **Developer Experience**:
  - Hot reloading during development
  - Code quality with [Biome](https://biomejs.dev) for linting and formatting
  - Git hooks with [Husky](https://typicode.github.io/husky)
  - TypeScript strict mode with comprehensive type safety
  - [Knip](https://knip.dev) for unused dependency detection
  - Easy spin up with [Tilt](https://tilt.dev)
- 🚢 **Production Ready**:
  - Managed and bare workflow support
  - [Expo Prebuild](https://docs.expo.dev/workflow/continuous-native-generation) for native project generation
  - EAS Build and Submit for app store deployment

## Local Development

Use [Tilt](https://tilt.dev) for a unified development experience:

```sh
tilt up
```

Or run manually:

### Installation

```sh
bun install
```

### Running

```sh
bun start
```

Follow the instructions in the output to open the app on your device or emulator.

### Platform-Specific

```sh
bun android    # Start on Android
bun ios        # Start on iOS
bun web        # Start on Web
```

### Development Options

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Bare Workflow

If you want full native control over your project, you can use [Expo Prebuild](https://docs.expo.dev/workflow/continuous-native-generation):

```sh
bun expo prebuild
bun expo run:android
bun expo run:ios
```

`prebuild` generates the native iOS and Android projects.

`run:android`/`run:ios` builds and runs the app on the respective platform. After prebuilding, you can modify native code directly and use any React Native library with custom native modules.

## License

The code in this repository is licensed under MIT, &copy; [Omni LLC](https://omni.dev). See [LICENSE.md](LICENSE.md) for more information.
