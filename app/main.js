"use strict";

var app = require('app');

var BrowserWindow = require('browser-window');
var mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({ fullscreen: true });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools if run with "--debug as argument"
  if(process.argv[1].search("debug") != -1){
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

app.on('window-all-closed', function () {
  app.quit();
});

