import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('display', {static: true}) display: ElementRef;
  drumKeys: {[key: string]: string} = {
    'Q': 'RDM_RAW_SY1-Tom01.wav',
    'W': 'RDM_Raw_MT40-Kick01.wav',
    'E': 'RDM_Raw_MT40-ClHat.wav'
  };
  baseURL = 'https://sourcecodesamurai.s3-us-west-2.amazonaws.com/media/';
  title = 'drum-machine';

  onTap(key: string, fileName:string){
    this.playMedia(fileName);
    this.updateDisplay(key);
  }

  playMedia(fileName: string){
    let audio = new Audio;
    audio.src = this.baseURL + 'RDM_Raw_SY1-Tom01.wav';
    audio.play();
  }

  updateDisplay(key:string){
    this.display.nativeElement.innerHTML = key;
  }
}
