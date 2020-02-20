import { IO } from '@/script/io'
import { MetaData } from '@/script/metadata'
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { ICommonTagsResult, IPicture } from 'music-metadata';

export class Artist {
    constructor(name?: string, ...albums: Album[]) {
        this.name = name !== undefined ? name : 'NoName';
        this.album = albums;
    }
    name?: string;
    album: Album[];
}

export class Album {
    constructor(name?: string, ...tracks: Track[]) {
        this.name = name !== undefined ? name : 'NoName';
        this.tracks = tracks;
    }
    name?: string;
    tracks: Track[];
}

export class Track {
    constructor(src: string, tags: ICommonTagsResult) {
        this.src = src;
        this.title = tags.title;
        this.artist = tags.artist;
        this.album = tags.album;
        this.track = tags.track
    }
    src: string;
    title?:string;
    artist?:string;
    album?:string;
    track?:ICommonTagsResult["track"];
    public async getImg():Promise<ICommonTagsResult["picture"]>{
        var md = new MetaData();
        return (await md.getMetaData(this.src)).picture;
    }
}

export class MediaManager {
    constructor() {
        this.db.push('/artists[]', []);
    }

    private io = new IO();
    private metaData = new MetaData();
    private db = new JsonDB(new Config("MediaDb", false, false, '/'));

    private artists = new Array<Artist>();

    public findAudio(dir: string, filter: string[] = []) {
        var paths = this.io.getFiles(dir, filter);
        paths.forEach(async (item, index, array) => {            
            var artist: Artist;
            var album: Album;
            var track: Track;

            var md = await this.metaData.getMetaData(item);
            var findArtist = await this.contains(this.artists, md.artist)
            if (!findArtist) {
                artist = new Artist(md.artist);
                album = new Album(md.album);
                track = new Track(item, md);
                album.tracks.push(track);
                artist.album.push(album);
                this.artists.push(artist);
            }
            else {
                var tempArtist = this.artists.find(data => {
                    if (data.name === md.artist)
                        return data;
                })
                artist = tempArtist !== undefined ? tempArtist : new Artist(md.artist);

                var tempAlbum = artist.album.find(data => {
                    if (data.name === md.album) {
                        return data;
                    }
                })
                if (tempAlbum === undefined)
                    artist.album.push(new Album(md.album, new Track(item, md)));
                else
                    tempAlbum.tracks.push(new Track(item, md));
            }
            if(index === array.length - 1){
                this.db.push('/artists[]', this.artists);
                this.db.save();
            }                
        });
    }

    private async contains(array: any[], name?: string): Promise<boolean> {
        if (name === undefined)
            return false;
        else
            var value = array.find(data => {
                if (data.name == name)
                    return data;
            });
        if (value === undefined)
            return false;
        else
            return true;
    }
}