import { Component, OnInit } from '@angular/core';
import { Curator } from '../curator';
import { CommissionersCuratorsService } from '../commissioners-curators.service';

@Component({
  selector: 'app-commissioners',
  templateUrl: './commissioners.component.html',
  styleUrls: ['./commissioners.component.css']
})
export class CommissionersComponent implements OnInit {

  commissioners: Curator[];

  constructor(private commissionerCuratorsService: CommissionersCuratorsService) { }

  ngOnInit() {
    this.getCommissioners();
  }

  getCommissioners(): void {
    this.commissionerCuratorsService.getCommissioners()
    .subscribe(commissioners => this.commissioners = commissioners)
  }
}
