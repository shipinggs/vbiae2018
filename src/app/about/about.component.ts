import { Component, OnInit } from '@angular/core';
import { Curator } from '../curator';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  commissioners: Curator[];
  curators: Curator[];
  
  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getCommissioners();
    this.getCurators();
  }

  getCommissioners(): void {
    this.aboutService.getCommissioners()
    .subscribe(commissioners => this.commissioners = commissioners)
  }
  
  getCurators(): void {
    this.aboutService.getCurators()
      .subscribe(curators => this.curators = curators)
  }
}
