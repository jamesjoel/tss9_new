import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mybox',
  templateUrl: './mybox.component.html',
  styleUrls: ['./mybox.component.scss']
})
export class MyboxComponent implements OnInit {

  @Input() anyvar:string;
  constructor() { }

  ngOnInit() {
  }

}
