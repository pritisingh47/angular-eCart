import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corosel',
  templateUrl: './corosel.component.html',
  styleUrls: ['./corosel.component.css'],
  providers:[NgbCarouselConfig]
})
export class CoroselComponent implements OnInit {

  constructor(config: NgbCarouselConfig, 
    public router: Router) { 
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
 
}
