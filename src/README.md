# TranslaTalk Project Architecture Guidelines

This project follows a strict modular structure to maintain scalability and clean code (Max 200 lines per file where possible).

## Folder Definitions: What goes where?

- **`src/assets/`**: Raw static files. Contains images (logos, icons), custom fonts, and static data JSONs.
- **`src/components/`**: Pure UI elements that are reusable. Examples: Buttons, TextInputs, ChatBubble, CustomModal.
  - *Rule for 200-line adherence:* Reusable components must not contain complex business logic or fetch data. They should only receive props. If a component gets too large (renders too many sub-elements), break it into smaller sub-components.
- **`src/constants/`**: App-wide static values. Config.js (API URLs), API keys, theme colors (if not using ThemeProvider), standard spacing values.
- **`src/context/`**: Global State Management providers. AuthContext, ThemeContext, SettingsContext.
- **`src/hooks/`**: Custom React Hooks for encapsulating logic. useAuth, useChat, useTranslate API.
  - *Key for 200-line adherence:* Move ANY complex logic (state management, API calls, error handling) FROM a Screen TO a Custom Hook here.
- **`src/navigation/`**: Routing configuration. Defines Stack, Tab, and Drawer Navigators. MainNavigator.js, AuthNavigator.js.
- **`src/screens/`**: Full page views. HomeScreen, ChatScreen, LoginScreen. These are *containers* that assemble UI components.
  - *Rule for 200-line adherence:* Screens must be "thin." They should only manage state by calling Custom Hooks (`src/hooks/`) and render UI by importing Components (`src/components/`). No logic should be written directly here.
- **`src/services/`**: External API Interactions. Define Axios instances or DeepL API client classes/functions here. *Never call API endpoints directly from Screens/Hooks without a Service.*
- **`src/theme/`**: Stylistic foundations. Contains colors.js, fonts.js, overall StyleSheet templates for global usage.
- **`src/utils/`**: Helper Functions. Contains pure utility functions like date formatter (formatChatTime.js), string manipulation, validator functions.
