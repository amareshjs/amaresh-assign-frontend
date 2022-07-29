import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  @ViewChild("content", { static: true }) content: ElementRef;
  ngOnInit(): void {

  }

}
