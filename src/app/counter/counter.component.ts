import { Component, OnInit } from '@angular/core';
import {AppCounterService} from "../service/app-counter.service";
import {LocalCounterService} from "../service/local-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) { }


}
