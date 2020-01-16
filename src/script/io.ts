<<<<<<< HEAD
import { remote } from 'electron'
import * as fs from 'fs'
const dialog = remote.dialog

let content : string = 'Test creating file'

interface IOFunctionality{
     saveFile():any,
     readFile(filename:string):any,
     readFileIcon():any

}
export class IOFunctionalityImpl implements IOFunctionality{


    async saveFile(){
        var file = await dialog.showSaveDialog(remote.getCurrentWindow(),{
            title:'Save file to...'
        })

        if(file.filePath !== undefined){
            fs.writeFile(file.filePath,content,(err)=>{
                if(err){
                    alert('Error ocurred creating the file' + err.message)
                }else{
                    alert('Saved')
                    alert()
                 }
            })
        }
    }
 //Set directory for config folder coz after build app cannot find config file
    async readFile(filename:string){
         fs.readFile("./config/"+filename, 'utf-8', (err, data) => {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }else{
            // Change how to handle the file content
            alert("The file content is : " + data ); 
              }
        });
    }

     readFileIcon() {
        //Open file dialog 
        const files:any = dialog.showOpenDialogSync(remote.getCurrentWindow(),{
            properties:['openFile'],
            filters:[
                //Filters
                { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                { name: 'Custom File Type', extensions: ['as'] },
                { name: 'All Files', extensions: ['*'] } 
            ]
        });
        
        //if no files
        if(!files){
            return;
        }

        const file = files[0];

        const fileContent = fs.readFileSync(file).toString();

        alert(fileContent);

     }
}
=======
import { remote } from "electron";
import * as fs from "fs";
const dialog = remote.dialog;

interface IOFunctionality {
  saveFileDialog(data: any, options?: any): void;
  saveFileDialogSync(data: any, options?: any): void;
  saveFile(filePath: string, data: any): void;
  readFile(filePath: string, encoding: string): string | undefined;
  readFileDialogSync(options?: any): any;
}
export class IO implements IOFunctionality {
  async saveFileDialog(data: any, options?: any) {
    let file = await dialog.showSaveDialog(remote.getCurrentWindow(), options);

    if (file.filePath !== undefined) {
      fs.writeFile(file.filePath, data, err => {
        if (err) {
          // TODO: log msg
          alert("Error ocurred creating the file : " + err.message);
        } else {
          alert("Saved");
        }
      });
    }
  }

  saveFileDialogSync(data: any, options?: any) {
    let file = dialog.showSaveDialogSync(remote.getCurrentWindow(), options);
    if (file !== undefined) {
      fs.writeFileSync(file, data);
    }
  }

  async saveFile(filePath: string, data: any) {
    await fs.writeFile(filePath, data, err => {
      if (err) {
        alert("Error ocurred creating the file : " + err.message);
      }
    });
  }

  readFile(filePath: string, encoding: string): string | undefined {
    let result = fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        alert("Error ocurred creating the file : " + err.message);
      }
      return data;
    });
    return;
  }

  readFileDialogSync(options: any) {
    //Open file dialog
    let files: any = dialog.showOpenDialogSync(
      remote.getCurrentWindow(),
      options
    );
    //if no files
    if (!files) {
      return undefined;
    }
    let file = files[0];
    let fileContent = fs.readFileSync(file).toString();
    return fileContent;
  }
}
>>>>>>> 7be256dfa67f617228b692f1ae9bc4ce933793b1
