// import file system
const fs = require("fs");
// import the path 
const path = require("path");

// read directury using readdir method of file system 
fs.readdir(__dirname, (err, files) => {
    // checking there is an error
    if (err) return console.error("Erour :", err.message);
    console.log("Contenu du dossier :", files);

    // number of 
    const date = new Date().toLocaleString();
    console.log(`Date : ${date}`);
    console.log(`Nombre de fichiers trouvés : ${files.length}`);


    // using forEach loop for display th full path of each file
    files.forEach(file => {
        // console log the file path 
        console.log(path.join(__dirname, file));

        try {
            const stats = fs.statSync(filePath); // utiliser filePath
            const creationDate = stats.birthtime.toLocaleString(); // creation Date file 

            console.log(`${file} — créé le : ${creationDate}`); // console log file with creation date
        } catch (error) {
            console.error(`Impossible de lire ${file} :`, error.message);  // error message with file 
        }
    });
});

