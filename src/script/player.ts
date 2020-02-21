import {Howl, Howler} from 'howler';

 
 

export class MusicPlayer{
    private SoundsMassive!:string[];
    private soundPlayer:Howl[]=[];
    private currentSong:any = 0 ;

    constructor(soundsMassive:string[]){
        this.SoundsMassive = soundsMassive;
    
        for (let index = 0; index < soundsMassive.length; index++) {
           this.soundPlayer[index]=new Howl({
            src: soundsMassive[index],
            volume:0.1
          });
        }
            
    }   
     
    PlayOrPause(){
        window.console.log(this.currentSong)
        if(this.soundPlayer[this.currentSong].playing()){
            this.PauseMusic();
        }else{
            this.PlayMusic();
        }
    }
    
    PlayMusic(){    
        this.soundPlayer[this.currentSong].play();
         
    }

    PauseMusic(){
        this.soundPlayer[this.currentSong].pause();
    }

    StopMusic(){
            this.soundPlayer[this.currentSong].stop();
    }    
         
    PlusVolume(){
        let volume = this.soundPlayer[this.currentSong].volume();
           if(volume <= 1.0){
           window.console.log(this.soundPlayer[this.currentSong].volume(volume + 0.1));
           } 
    }
    MinusVolume(){
        let volume = this.soundPlayer[this.currentSong].volume();
         if(volume >= 0.0){
           window.console.log(this.soundPlayer[this.currentSong].volume(volume - 0.05));
         }
    }

    NextSound(){
       this.soundPlayer[this.currentSong].stop();
            if(this.currentSong >= this.SoundsMassive.length-1){
                    this.currentSong = 0;
                    this.PlayOrPause();
            }else{
                    this.currentSong+=1;
                    this.PlayOrPause();
            }
     }

     PrevSound(){
        this.soundPlayer[this.currentSong].stop();
            if(this.currentSong <= 0){
                this.currentSong = this.SoundsMassive.length-1;
                this.PlayOrPause();
            }else{
                this.currentSong--;
                this.PlayOrPause();
            }   
     }

     
}