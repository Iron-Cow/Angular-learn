import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(text): void{
    console.log(`log: ${text}`);
  }
}
