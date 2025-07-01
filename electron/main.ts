// electron/main.ts
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { startServer } from '../server/index.js'; // Note the required .js extension for ESM

// Workaround for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // A preload script is recommended for security but optional for this demo
      // preload: path.join(__dirname, 'preload.js'),
    },
  });

  // The Vite dev server URL
  const startUrl = 'http://localhost:5173';
  win.loadURL(startUrl);

  // Open DevTools for debugging
  win.webContents.openDevTools();
}

// Start the Express server when the app is ready
app.whenReady().then(() => {
  console.log('[Electron] App is ready, starting server...');
  startServer();
  createWindow();
});

// Standard macOS behavior
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});