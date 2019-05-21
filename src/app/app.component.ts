import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectFormGroup = new FormGroup({
    projectName : new FormControl('', [Validators.required, this.projectNameValidator]),
    email : new FormControl('', [Validators.required, Validators.email]),
    projectStatus : new FormControl('')
  });

  onSubmit(){
    console.log(this.projectFormGroup.value);
    console.log(this.projectFormGroup)
  }

  projectNameValidator(control:FormControl):Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=> {
          setTimeout(() => {
            if (control.value === 'Test') {
              resolve({'projectNameForbidden':true});

            }else{
              resolve(null);
            }
          },1500);
        });
        return promise;
  }



}
