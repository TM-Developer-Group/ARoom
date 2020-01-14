import { remote } from 'electron'
import * as fs from 'fs'
const dialog = remote.dialog

let content : string = 'Test creating file'

interface IOFunctionality{
     saveFile():any,
     readFile(filename:string):any,

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
}