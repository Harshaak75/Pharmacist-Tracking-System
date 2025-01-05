import { atom } from "recoil";

export interface AuthState {
  isLoggedIn: boolean;
  role?: string | null; // Adjust this type as needed
}

// Check localStorage for persisted state
const persistedState = JSON.parse(localStorage.getItem("authSafe") || "{}");

export const AuthSafe = atom<AuthState>({
  key: "authSafe",
  default: {
    isLoggedIn: false, // Default value
    role: null, // Default value
    ...persistedState, // Overwrite with persisted state if available
  },
  effects: [
    ({ onSet }) => {
      onSet((newState) => {
        localStorage.setItem("authSafe", JSON.stringify(newState)); // Save to localStorage
      });
    },
  ],
});