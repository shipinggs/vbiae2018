import { Component, OnInit } from '@angular/core';
import { Curator } from '../curator';
import { CommissionersCuratorsService } from '../commissioners-curators.service';

@Component({
  selector: 'app-curators',
  templateUrl: './curators.component.html',
  styleUrls: ['./curators.component.css']
})
export class CuratorsComponent implements OnInit {

  curators: Curator[];

  constructor(private commissionerCuratorsService: CommissionersCuratorsService) { }

  ngOnInit() {
    this.getCurators();
  }
  
  getCurators(): void {
    this.commissionerCuratorsService.getCurators()
      .subscribe(curators => this.curators = curators)
  }

}