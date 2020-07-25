import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  number1 = 42;
  arr = [1, 3, 5];
  obj = {
    a: 1,
    b: {c: 2}
  };
  img = 'https://w7.pngwing.com/pngs/791/922/png-transparent-react-javascript-library-redux-user-interface-tesseract-logo-symmetry-nodejs.png';
  img2 = 'https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png';
  inputValue = '';

  title = 'initial';


  constructor(){
    // tslint:disable-next-line:no-unused-expression
    setTimeout(() => {
        this.img = this.img2;
        console.log('timeout');
      }, 4000

    );
  }


  onInput(event: any): void{
    console.log("Event", KeyboardEvent);
    this.inputValue = ( event.target as HTMLInputElement).value;
  }

  onClick(): void {
    console.log('Click');
  }

  onBlur(str: string): void{
    this.inputValue = str;
  }

  onInput2(event: any): void{
    this.title = event.target.value;
  }
}
