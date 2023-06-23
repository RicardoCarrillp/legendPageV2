import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor( private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('AppComponent initialized');
  }

}
