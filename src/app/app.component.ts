import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppCounterService} from "./service/app-counter.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public appCounterService: AppCounterService){}
}
