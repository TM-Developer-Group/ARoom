import {Howl, Howler} from 'howler';

 
 

export class MusicPlayer{

    private SoundsMassive!:string[];
    private soundPlayer:Howl[]=[];
    private currentSong:any = 0;

    constructor(soundsMassive:string[]){
        this.SoundsMassive = soundsMassive;
    
        for (let index = 0; index < soundsMassive.length; index++) {
           this.soundPlayer[index]=new Howl({
            src: soundsMassive[index]
            
          });
        }
            
    }   
    
    PlayOrPause(){
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
    
    SetVolume(volume:any){
        this.soundPlayer[this.currentSong].volume(volume);
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

     LoopSong(){
       
        if(this.soundPlayer[this.currentSong].loop()){
            this.soundPlayer[this.currentSong].loop(false);
        }else{
            this.soundPlayer[this.currentSong].loop(true);
        }

     }

     GetSeekSong():any{
         return this.soundPlayer[this.currentSong].seek();
     }

     GetDurationSong():any{
         return this.soundPlayer[this.currentSong].duration();
     }


}