import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup | any;
  constructor(private userService: UserService, private snack: MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }

  formSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('User name is required !!', '', {
        duration: 3000,
      });
      return;
    }
    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);

        Swal.fire(
          'Success done !!',
          'Login with user name ' + data.username,
          'success'
        );
      },
      (error) => {
        //error
        if (error.status == 500) {
          this.snack.open(
            'User with this Username is already there in DB !! try with another one',
            '',
            {
              duration: 3000,
            }
          );
        } else {
          this.snack.open('Error while registering!! Try in some time', '', {
            duration: 3000,
          });
        }
      }
    );
  }
}
