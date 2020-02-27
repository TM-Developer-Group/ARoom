import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { MediaManager, Artist, Track, Album } from "@/script/mediaManager";

export class AudioSearch {
    private db = new JsonDB(new Config("MediaDb", false, false, "/"));
    private mediaManager = new MediaManager();

    public async findArtist(artistName:string):Promise<Artist>{
        var artists = await this.mediaManager.getArtistsFromDb();
        var artist = artists.find(data => data.name === artistName);
        if(artist === undefined)
            throw new Error(`Cant't find artist with name ${artistName}`);
        else
            return artist;
    }

    public async findAlbum(artistName:string, albumName:string):Promise<Album>{
        var artist = await this.findArtist(artistName);
        var album = artist.albums.find(data => data.name === albumName);
        if(album === undefined)
            throw new Error(`Cant't find album with name ${albumName}`);
        else
            return album;
    }
}