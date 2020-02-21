import * as mm from 'music-metadata';
import * as util from 'util';

interface MetadataFunctionality{
    getMetaData(filename:string):any;
}

export class MetaData implements MetadataFunctionality{
     async getMetaData(filename:string):Promise<mm.IAudioMetadata>{    
       return await mm.parseFile(filename);    
    }
}