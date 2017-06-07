import { Component, OnInit,NgModule,ViewChild,Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ModalComponent } from '../../modal/modal.component';
import {ModalServiceService} from '../../shared/modal-service.service';


class Signup {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '') {
  }
}
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

  constructor(private authService:AuthService,private clsmodal:ModalServiceService) { }
  user : Signup;
  model: Signup = new Signup();
  @ViewChild('signUpForm') form: any;
  @Input() modal :ModalComponent;


  onSubmit() {
    if (this.form.valid) {
      this.authService.postSignUp(this.model)
                           .subscribe(
                               user => {this.user = user;
                                 console.log(this.user);
                                }, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
      this.form.reset();
      this.clsmodal.closeModal.emit(false);
    }
    
  }
  // submitForm(){
  //   this.dataService.postSignUp()
  //                          .subscribe(
  //                              user => this.user = user, //Bind to view
  //                               err => {
  //                                   // Log errors if any
  //                                   console.log(err);
  //                               });
  // }

}
