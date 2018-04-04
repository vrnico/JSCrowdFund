import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';
import { CauseService } from '../cause.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './cause-detail.component.html',
  styleUrls: ['./cause-detail.component.css'],
  providers: [CauseService]
  //cause service provider connects us with database and allows us to use Firebase data across multiple components
})

export class CauseDetailComponent implements OnInit {
  causeId: string;
  causeToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private causeService: CauseService) { }

  //private route: ActivatedRoute allows us to go to specific page based off of data in Firebase
  filterByCategories: string = "Art";


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.causeId = urlParameters['id'];
     //the above two lines set up route paramaters and generate urls based off of Firebase hash ids
   });
   this.causeToDisplay = this.causeService.getCauseById(this.causeId).subscribe(dataLastEmittedFromObserver => {
     this.causeToDisplay = dataLastEmittedFromObserver;
   });
   //calls causeToDisplay and getCauseById(this.causeId) to tell causeService to route us to specific causes
  }

  badgeColor(causeToDisplay) {
    if (causeToDisplay.category == 'Health') {
      console.log(causeToDisplay)
      return "badge badge-warning";
    } else if( causeToDisplay.category =='Travel'){
      return "badge badge-success";
    } else if( causeToDisplay.category =='Humanities'){
      return "badge badge-info";
    } else if( causeToDisplay.category =='Arts'){
      return "badge badge-danger";
    } else if( causeToDisplay.category =='Other'){
      return "badge badge-dark";
    }

    onChange(optionFromMenu){
      this.filterByCategories = optionFromMenu;
    }


  }

}
