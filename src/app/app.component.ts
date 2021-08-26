import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoProject';


  ngOnInit() {
    const smile = String.fromCodePoint(0x1F920);
    // const str = `Smile ${smile} you're on TV.`;
    alert(`Welcome to the project! ${smile}`);
  }
}
