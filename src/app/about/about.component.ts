import { Component, OnInit } from '@angular/core';
import { Curator } from '../curator';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  curators: Curator[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getCurators();
  }

  getCurators(): void {
    this.aboutService.getCurators()
      .subscribe(curators => this.curators = curators)
  }
}
