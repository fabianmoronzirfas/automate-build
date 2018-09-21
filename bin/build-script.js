const fs = require('fs');

const now = new Date().toString();
fs.writeFile('index.html', `<!doctype html><html><head></head><body>${now}</body></html>`, (err, data)=>{
  if (err){
    console.log(err);
  }else{
    console.log(`build done at ${now}`)
  }
})
