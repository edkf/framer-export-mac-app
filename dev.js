const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 375, height: 812})
  mainWindow.loadURL(`http://localhost:3000/`)

  // WIP
  setTimeout(function () {
    mainWindow.reload()
  }, 3000)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
