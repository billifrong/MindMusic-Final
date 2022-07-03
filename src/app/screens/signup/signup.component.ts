import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  usuario = {
    Email: '',
    Contrasenia: '',
    Admin: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUpUser(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('admi', this.usuario.Admin);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

}
