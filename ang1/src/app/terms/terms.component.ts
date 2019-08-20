import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private mytitle : Title) { 
    this.mytitle.setTitle("Terms");
  }

  ngOnInit() {
  }

}
