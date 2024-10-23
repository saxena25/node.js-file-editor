const fs = require("fs");

let arguments = process.argv.slice(2);
let command = arguments[0];
let input2 = arguments[1];
let input3 = arguments[2];

const readFile = (input2) => {
  fs.readFile(input2, "utf-8", (err, data) => {
    if (err) console.log(err);

    console.log(`${data} of file ${input2}`);
  });
};

const appendFile = (input2, input3) => {
  //^ it will append the data to the file

  fs.appendFile(input3, JSON.stringify(input2), (err) => {
    if (err) console.log(err);
    console.log(`Context Appended to the file ${input3}`);
  });
};

const deleteFile = (input2) => {
  //! to delete file

  fs.unlink(input2, (err) => {
    if (err) console.log(err);
    console.log(`File ${input2} Deleted successfully`);
  });
};

const createFile = (input2) => {
  //^ to create a file -- 'w': The flag to write. It creates the file if it doesn’t exist, but does not write content.
  
  fs.open(input2, "w", (err) => {
    if (err) console.log(err);
    console.log(`File ${input2} created`);
  });
};

const rename = (input2, input3) => {
  //^ to Rename the file

  fs.rename(input2, input3,(err)=>{
      if(err) console.log(err);
      console.log(`File ${input2} renamed to ${input3}`);
  })
};


const readDir = () =>{
  fs.readdir('.', (err, files) => {
    if (err) {
      return console.error('Unable to scan directory:', err);
    }
    
    console.log('Files and directories in current directory:');
    // console.log(files); //& gives an array of files in directory
    
    files.forEach(file => {
      console.log(file);
    });
  });
}

switch(command){
  case "read":
    readFile(input2);
    break;
  case "append":
    appendFile(input2, input3);
    break;
  case "delete":
    deleteFile(input2);
    break;
  case "create":
    createFile(input2);
    break;
  case "rename":
    rename(input2, input3);
    break;
  case "list":
    readDir();
    break;
  default:
    console.log(`Invalid Command`);
    break;
}
