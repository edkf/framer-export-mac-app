const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 375, height: 812})
  mainWindow.loadURL(process.env.URL === 'dev' ? `http://localhost:3000/` : `file://${__dirname}/index.html`)


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
