import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('data-scroll-container') public element!: ElementRef;
  scroll!: any;
  statement!:any;

  constructor(private elementRef: ElementRef, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {


  }


}
