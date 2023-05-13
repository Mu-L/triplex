declare interface Window {
  triplex: {
    platform: typeof process.platform;
    handleMenuItemPress: (callback: (id: string) => void) => () => void;
    openLink: (url: string) => void;
    sendCommand: (id: string) => void;
    setMenu: (menu: import("electron").MenuItemConstructorOptions[]) => void;
    showSaveDialog: (filename: string) => Promise<string | undefined>;
  };
}
