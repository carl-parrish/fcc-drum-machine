import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('display', {static: true}) display: ElementRef;
  title = 'drum-machine';

  playMedia(fileName: string){
    console.log(fileName);
    this.display.nativeElement.innerHTML = fileName;
  }
}
