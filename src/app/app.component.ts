import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('display', {static: true}) display: ElementRef;

  drumKeys: {[key: string]: string} = {
    'Q': 'RDM_Raw_SY1-Tom01.wav',
    'W': 'RDM_Raw_MT40-Kick01.wav',
    'E': 'RDM_Raw_MT40-ClHat.wav',
    'A': 'RDM_Raw_SR88-Perc.wav',
    'S': 'RDM_Raw_MT40-Kick02.wav',
    'D': 'RDM_Raw_MT40-OpHat02.wav',
    'Z': 'RDM_Raw_SY1-Snr01.wav',
    'X': 'RDM_Raw_SY1-Kick03.wav',
    'C': 'RDM_Raw_SY1-HfHat.wav'
  };

  baseURL = 'https://sourcecodesamurai.s3-us-west-2.amazonaws.com/media/';
  title = 'drum-machine';

  onTap(key: string, event: Event){
    let audioObject = (event.target as Element).firstElementChild as HTMLAudioElement;
    this.updateDisplay(key);
    this.playMedia(audioObject);

  }

  playMedia(audio: HTMLAudioElement){
    audio.play();
  }

  updateDisplay(key:string){
    this.display.nativeElement.innerHTML = key;
  }

  noSort = (a, b) => 1;
}
