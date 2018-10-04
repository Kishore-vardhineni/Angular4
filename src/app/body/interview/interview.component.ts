import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
 
   name:string="Interview Questions Page";
  constructor() { }

  ngOnInit() {
  }

}
