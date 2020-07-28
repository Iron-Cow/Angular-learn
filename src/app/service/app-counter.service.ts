import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: "root"
}) // recommended for services /// auto register in module
export class AppCounterService {
  // register in providers or above
  counter = 0;

  constructor(private logService: LogService){}
  // imported service to inject

  increase(): void{
    this.logService.log('increase counter');
    this.counter++;
  }

  decrease(): void{
    this.logService.log('decrease counter');

    this.counter--;
  }

}
