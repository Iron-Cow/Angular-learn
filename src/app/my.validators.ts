import {FormControl} from "@angular/forms";

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean}{
    if (['a@gmai.com', 'test@test.ua'].includes(control.value)){
      return {
        restrictedEmail: true
      };
    }

    return null;
  }
}
