import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from "./registration.service";

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  /*constructor() { }

  ngOnInit() {
  }*/
  loginForm: FormGroup;
  submitted = false;
  private users: any;

  constructor(
    private formBuilder: FormBuilder,
    private registration: RegistrationService,
   // private route:Router,
    //private localstorage:LocalStorage
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail: ['knageswar888@gmail.com', [Validators.required,Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      name: ['nag007', [Validators.required]]
    });

    ///////////////////////




  }
  get f() { return this.loginForm.controls; }

  onSubmit(formdata) {
    this.submitted = true;
    if (this.loginForm.invalid) {    // stop here if form is invalid
      return;
    }
    else {
      this.validation(formdata)
    }
  }

  validation(formdata) {
    //let email = formdata.email
    console.log("ts",formdata)
    this.registration.PostEmail(formdata).subscribe((responce) => {
        this.users = responce
        console.log("email",responce)
        //this.localstorage.setItem('user',  this.users).subscribe(() => {});

       /* if (this.users) {
          console.log("-------------",this.users[0].email,"---",this.users[0].password)
          if ((formdata.email == this.users[0].email) && (formdata.password == this.users[0].password)) {
            //this.route.navigate(['/restaurants'])
          }
          else {
            alert("failed")
          }
        }*/
      }, () => {
      },
      () => {
      });
  }

}
