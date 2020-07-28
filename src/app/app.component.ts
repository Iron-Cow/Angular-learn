import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppCounterService} from "./service/app-counter.service";
import {LocalCounterService} from "./service/local-counter.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService] // local registration
})
export class AppComponent{
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ){}
}
