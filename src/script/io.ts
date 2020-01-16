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
