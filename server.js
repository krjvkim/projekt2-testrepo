//App. js ist für die Erstellung von statischen Single-Page-Apps konzipiert. 
//Das bedeutet, dass es die gesamte Seitennavigation innerhalb der Session der Webseite hält und "Seiten" als DOM-Knoten definiert, die instanziiert werden können. 
//Seiten sind HTML-Elemente, die bestimmte generische Komponenten wie eine Kopfleiste und einen Inhaltsbereich haben.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "webappstartseite.php"));
  res.sendFile(path.resolve(__dirname, "frontend", "css", "style.css"));
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
