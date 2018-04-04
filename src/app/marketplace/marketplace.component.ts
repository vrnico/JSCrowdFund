import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { CauseService } from '../cause.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [CauseService]
})

export class MarketplaceComponent implements OnInit {
  causes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private causeService: CauseService){}

  ngOnInit(){
    this.causes = this.causeService.getCauses();
  }

  goToDetailPage(clickedCause) {
    this.router.navigate(['causes', clickedCause.$key]);
  };
}
