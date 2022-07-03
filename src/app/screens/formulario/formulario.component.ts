import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  usuario = {
    Email: '',
    Contrasenia: '',
    Admin: ''
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signInUser(this.usuario).subscribe(
      res => {console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('admi', this.usuario.Admin);
        this.router.navigate(['/home']);
      },
      err =>  confirm("Error en el email, permiso o contraseña ingresados")
    )
  }

}
