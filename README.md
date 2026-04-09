# TranslaTalk

**TranslaTalk** is a modern React Native chat experience built with Expo. It combines messaging, real-time translation, profile management, secure chat utilities, and a polished theme system into one mobile-first communication app.

## Overview

TranslaTalk is designed to break language barriers and make cross-language communication feel natural. The app starts with a branded landing experience, supports authentication and profile sync, and then routes users into a chat workspace with rich conversation tools and account settings.

## Key Features

| Feature | Description |
| --- | --- |
| Real-time translation | Translate messages instantly into the selected language. |
| Auth & profile sync | Sign in, register, and keep profile data synced with the backend. |
| Chat workspace | Browse conversations, open chat windows, and switch between chats on desktop or mobile layouts. |
| Theme support | Light and dark mode with persisted user preference. |
| Secure storage | Uses AsyncStorage for auth state and theme preference. |
| Advanced chat sections | Archived chats, hidden chats, blocked users, group info, add contact, and new chat flows. |
| Vault settings | Dedicated secure vault-related settings and profile controls. |
| Support pages | About, Help, Feedback, Privacy, Terms, Developers, and User Manual screens. |
| Rich UX | Splash screen, custom fonts, haptics, gradients, blur, and animated UI elements. |

## Tech Stack

- **Framework:** React Native
- **Platform:** Expo
- **Navigation:** React Navigation
- **State & persistence:** React Context + AsyncStorage
- **Animations & UI:** Animated API, Expo Linear Gradient, Expo Blur, Lottie
- **Media & utilities:** Expo Image Picker, Expo Haptics, Expo Font, Expo Splash Screen
- **Networking:** Fetch API and `socket.io-client` dependency

## Project Structure

```text
src/
  assets/       Static images, icons, fonts, and JSON assets
  components/   Reusable UI building blocks
  constants/    App-wide configuration values
  context/      Global state providers
  hooks/        Feature-specific logic hooks
  navigation/   App navigation setup
  screens/      Full-screen app views
  theme/        Color and styling foundations
  utils/        Shared helper functions
```

## Main Screens

- **Landing** - marketing-style welcome screen with theme toggle
- **Login** - authentication flow
- **Chat** - main conversation workspace
- **Profile / Settings** - account and app preferences
- **New Chat / Add Contact** - start conversations and manage contacts
- **Archived / Hidden / Blocked** - conversation privacy and organization
- **Vault Settings** - secure vault configuration
- **About / Help / Feedback / Privacy / Terms / User Manual** - support and product documentation

## Getting Started

### Prerequisites

- Node.js
- npm
- Expo Go, Android Studio, or Xcode depending on the target platform

### Install

```bash
npm install
```

### Run

```bash
npm start
npm run android
npm run ios
npm run web
```

## Configuration

The backend base URL is defined in:

```text
src/constants/Config.js
```

By default, it points to a local development server:

```js
export const API_URL = 'http://127.0.0.1:8001';
```

Update this value before building for another environment.

## App Behavior Notes

- App startup preloads fonts, static assets, and essential backend data.
- Authentication state is restored from local storage on launch.
- Theme preference persists between sessions.
- The chat screen adapts to mobile and larger screens by showing either the sidebar or split view.

## Brand & Design Notes

TranslaTalk uses:

- a purple-blue brand gradient,
- custom splash and app icons,
- a clean modular screen architecture,
- and a strong focus on readability and multilingual communication.

## Contributing

Keep changes modular, reusable, and screen-focused. Follow the existing folder conventions in `src/` and keep business logic in hooks or context providers rather than inside screens.

## License

No license has been specified in this repository yet.
