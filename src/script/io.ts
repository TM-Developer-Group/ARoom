import { remote } from "electron";
import * as fs from "fs";
 


const dialog = remote.dialog;
const TYPE_AUDIO = [".wav",".flac",".mp3",".mp4",".zip"];

export interface IOFunctionality {
  saveFileDialog(data: any, options?: any): void;
  saveFileDialogSync(data: any, options?: any): void;
  saveFile(filePath: string, data: any): void;
  readFile(filePath: string, encoding: string): string | undefined;
  readFileDialogSync(options?: any): any;
  readFileFromDir(folderName:string,filter:any):string[];
  readFileFromDirDialog():string[];
}

export class IO implements IOFunctionality {
  async saveFileDialog(data: any, options?: any) {
    let file = await dialog.showSaveDialog(remote.getCurrentWindow(), options);

    if (file.filePath !== undefined) {
      fs.writeFile(file.filePath, data, err => {
        if (err) {
          window.console.log(
            "io.ts >> Error ocurred creating the file : " + err.message
          );
        } else {
          window.console.log("io.ts >> Saved");
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
        window.console.log("Error ocurred creating the file : " + err.message);
      }
    });
  }
  
  getFiles(dir:any, files_:any,filter:any){    
    files_ = files_ || [];
      var files = fs.readdirSync(dir);
      for (var i in files){
          var name = dir + '/' + files[i];
          if (fs.statSync(name).isDirectory()){
              this.getFiles(name, files_,filter);
          } 
          if(fs.statSync(name).isFile()){
            for (let index = 0; index < filter.length; index++) {
               if(name.endsWith(TYPE_AUDIO[TYPE_AUDIO.indexOf(filter[index])])){
                files_.push(name);
               }   
            }       
          }
      }
      return files_;
  }

  readFile(filePath: string, encoding: string): string | undefined {
    let files_:any = [];
    let result = fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        window.console.log("Error ocurred creating the file : " + err.message);
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


  readFileFromDir(folderName: string,filter:any): string[] {
    let FileInfo:string[] = [];
    fs.readdirSync(folderName).forEach(file => {
      FileInfo.push(file);
    });
    return FileInfo;
  }

  readFileFromDirDialog(): string[] {
    let FileInfo: string[] = [];
    let options: any = { properties: ["openDirectory"] };
    let dir: any = dialog.showOpenDialogSync(
      remote.getCurrentWindow(),
      options
    );
    fs.readdirSync(dir[0]).forEach(file => {
      FileInfo.push(file);
    });

    alert(FileInfo.length);
    return FileInfo;
  }
}
