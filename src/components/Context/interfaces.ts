interface IContextInitialState {
  isDark: boolean;
  language: string;
  toggleDark(): void;
  toggleLanguage(language: string): void;
}

export { IContextInitialState };
