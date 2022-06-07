const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname : path.join(__dirname,'./dist/views/index.html'),
            protocol : 'file:',
            slashes : true
        })
    )
});




require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});