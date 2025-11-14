# ⚛️ React Native Template

This is a [React Native](https://reactnative.dev) application powered by [Expo](https://expo.dev).

## Get Started

Use [Tilt](https://tilt.dev) for a unified development experience:

```bash
tilt up
```

If you don't want to use Tilt, follow these steps:

First, install dependencies with `bun install`.

Then, start the app with `bun start` and follow the instructions in the output.

Alternatively, you can start directly on a per-platform basis with `bun android`, `bun ios`, or `bun web`.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Eject to Bare Workflow

If you want full native control over your project (bare React Native), you can eject from Expo:

```
bun expo prebuild
bun expo run:android
bun expo run:ios
```

`prebuild` generates the native iOS and Android projects.

`run:android`/`run:ios` builds and runs the app on the respective platform.

After ejecting, you can use normal React Native CLI commands and modify native code directly.

Keep in mind ejecting is **irreversible**: once ejected, you no longer get all Expo Go features automatically.

## License

The code in this repository is licensed under MIT, &copy; Omni LLC. See [LICENSE.md](LICENSE.md) for more information.
