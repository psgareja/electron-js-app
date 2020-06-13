const electron=require('electron')
const {app,BrowserWindow}=electron;
app.on('ready',()=>{
    const mianWindow=new BrowserWindow({})
    mianWindow.loadURL('https://web.whatsapp.com/');

})