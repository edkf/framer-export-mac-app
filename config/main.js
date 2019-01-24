const electron = require('electron')
const config = require('../prototype.config.js')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: config.dimensions.width, height: config.dimensions.height})
  mainWindow.loadURL(process.env.URL === 'dev' ? config.dev_url : config.build_url)

  // WIP
  if (process.env.URL === 'dev') {
    setTimeout(function () {
      mainWindow.reload()
    }, 3000)
  }

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
