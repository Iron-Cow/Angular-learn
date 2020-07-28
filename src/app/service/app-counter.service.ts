import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
}) // recommended for services /// auto register in module
export class AppCounterService {
  // register in providers or above
  counter = 0;

  increase(): void{
    this.counter++;
  }

  decrease(): void{
    this.counter--;
  }

}
