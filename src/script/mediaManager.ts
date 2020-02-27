import { IO } from "@/script/io";
import { MetaData } from "@/script/metadata";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { ICommonTagsResult, IPicture, IAudioMetadata } from "music-metadata";

export class MediaHelper {
  public static convertToTrack(obj:any):Track{
    var track = new Track();
    track.src = obj.src;
    track.album = obj.album;
    track.artist = obj.artist;
    track.duration = obj.duration;
    track.title = obj.title;
    track.track = obj.track;
    track.genre = obj.genre;
    return track;
  }
}

export class Artist {
  constructor(name?: string, ...albums: Album[]) {
    this.name = name !== undefined ? name : "NoName";
    this.albums = albums;
  }
  name?: string;
  albums: Album[];

  public getTracks(): Track[] {
    var tracks = new Array<Track>();
    this.albums.forEach(element => {
      element.tracks.forEach(item => {
        tracks.push(item);
      });
    });
    return tracks;
  }
}

export class Album {
  constructor(name?: string, artistName?:string, tracks?: Track[]) {
    this.name = name !== undefined ? name : "NoName";
    this.artist = artistName !== undefined ? artistName : "NoName";
    this.tracks = tracks !== undefined ? tracks : new Array<Track>();
  }
  name?: string;
  artist?: string;
  tracks: Track[];

  public getImg():Promise<ICommonTagsResult["picture"]>{
    return this.tracks[0].getImg();
  }

  public getTracks(): Track[] {
    var tracks = new Array<Track>();
    this.tracks.forEach(item => {
      tracks.push(item);
    });
    return tracks;
  }
}

export class Track {
  constructor(src?: string, tags?: IAudioMetadata) {
    if(src !== undefined)
      this.src = src;
    if(tags !== undefined){
      this.title = tags.common.title;
      this.artist = tags.common.artist;
      this.album = tags.common.album;
      this.track = tags.common.track;
      this.duration = tags.format.duration;
      this.genre = tags.common.genre;
    }
  }
  src?: string;
  title?: string;
  artist?: string;
  album?: string;
  track?: ICommonTagsResult["track"];
  duration?: number;
  genre?: string[];
  public async getImg(): Promise<ICommonTagsResult["picture"]> {
    var md = new MetaData();
    if(this.src !== undefined)
      return (await md.getMetaData(this.src)).common.picture;
    else
      throw new Error(`Can't find track src. src prop is undefind`);
  }
}

export class MediaManager {
  private io = new IO();
  private metaData = new MetaData();
  private db = new JsonDB(new Config("MediaDb", false, false, "/"));

  private artists = new Array<Artist>();

  public getArtists(): Artist[] {
    return this.artists;
  }

  public getAlbums(): Album[] {
    var albums = new Array<Album>();
    this.artists.forEach(artist => {
      artist.albums.forEach(item => {
        albums.push(item);
      });
    });
    return albums;
  }

  public getTracks(): Track[] {
    var tracks = new Array<Track>();
    this.artists.forEach(artist => {
      artist.albums.forEach(album => {
        album.tracks.forEach(item => {
          tracks.push(item);
        });
      });
    });
    return tracks;
  }

  public async findAudio(
    dir: string,
    callback?: () => any,
    filter: string[] = []
  ) {
    this.artists = new Array<Artist>();
    var paths = this.io.getFiles(dir, filter);
    paths.forEach(async (item, index, array) => {
      var artist: Artist;
      var album: Album;
      var track: Track;

      var md = await this.metaData.getMetaData(item);
      var mdCommon = md.common;
      var findArtist = await this.contains(this.artists, mdCommon.artist);
      if (!findArtist) {
        artist = new Artist(mdCommon.artist);
        album = new Album(mdCommon.album, mdCommon.artist);
        track = new Track(item, md);
        album.tracks.push(track);
        artist.albums.push(album);
        this.artists.push(artist);
      } else {
        var tempArtist = this.artists.find(data => {
          if (data.name === mdCommon.artist) return data;
        });
        artist =
          tempArtist !== undefined ? tempArtist : new Artist(mdCommon.artist);

        var tempAlbum = artist.albums.find(data => {
          if (data.name === mdCommon.album) {
            return data;
          }
        });
        if (tempAlbum === undefined)
          artist.albums.push(new Album(mdCommon.album, mdCommon.artist, [new Track(item, md)]));
        else tempAlbum.tracks.push(new Track(item, md));
      }
      if (index === array.length - 1) {
        this.db.push("/artists", this.artists);
        this.db.save();
        if (callback !== undefined) callback();
      }
    });
  }

  private async contains(array: any[], name?: string): Promise<boolean> {
    if (name === undefined) return false;
    else
      var value = array.find(data => {
        if (data.name == name) return data;
      });
    if (value === undefined) return false;
    else return true;
  }

  public async getArtistsFromDb():Promise<Artist[]> {
    return this.db.getData('/artists') as Artist[];
  }

  public async getAlbumsFromDb():Promise<Album[]> {
    var artists = await this.getArtistsFromDb();
    var albums = new Array<Album>();
    artists.forEach(artist => {
      artist.albums.forEach(album => {
        albums.push(album);
      })
    })
    return albums;
  }

  public async getTracksFromDb():Promise<Track[]>{
    var albums = await this.getAlbumsFromDb();
    var tracks = new Array<Track>();
    albums.forEach(album => {
      album.tracks.forEach(item => {
        tracks.push(item);
      })
    })
    return tracks;
  }
}
