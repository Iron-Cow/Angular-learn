import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl('', [
        Validators.minLength(6), Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl("Kiev", Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    if (this.form.valid){
      console.log('Form Submitted', this.form);
      const formData = {...this.form.value};
      console.log('form data: ', formData);
    }
  }

  setCapital(): void{
    const cityMap = {
      ua: "Kiev",
      ru: 'Moscow',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    console.log(city);

    this.form.patchValue({
      address: {city}
    });

  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);

    // <FormArray> this.form.get('skills');
    (this.form.get('skills') as FormArray).push(control);
  }
}
