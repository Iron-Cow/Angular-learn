import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


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
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6), Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl("", Validators.required)
      })
    });
  }

  submit(): void {
    if (this.form.valid){
      console.log('Form Submitted', this.form);
      const formData = {...this.form.value};
      console.log('form data: ', formData);
    }

  }
}
