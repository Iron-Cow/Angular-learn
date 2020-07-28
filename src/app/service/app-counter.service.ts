export class AppCounterService {
  // register in providers
  counter = 0;

  increase(): void{
    this.counter++;
  }

  decrease(): void{
    this.counter--;
  }

}
