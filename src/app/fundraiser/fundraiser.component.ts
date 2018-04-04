import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { CauseService } from '../cause.service';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css'],
  providers: [CauseService]
  //fundRaiser component is responsible for creating causes and is the only component that interacts with Firebase by creating/adding data

})
export class FundraiserComponent implements OnInit {

  constructor(private causeService: CauseService) { }

  submitForm(name: string, description: string) {
    var newCause: Cause = new Cause(name, description);
    this.causeService.addCause(newCause);
  }
  ngOnInit() {
  }

  }
