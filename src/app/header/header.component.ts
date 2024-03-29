import { Component, OnInit } from '@angular/core';
import { CargarscriptsService } from '../cargarscripts.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario_activo!: boolean

  form={
    correo:"",
    contrasena:""
  }

  constructor(private cargarscripts: CargarscriptsService, private auth: AngularFireAuth, private router: Router){
    
    cargarscripts.cargar([
      
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/php-email-form/validate.js",
      "assets/js/main.js"
    ])
  }
  ngOnInit(): void{
    this.auth.authState.subscribe(user =>{
      if (user){
        this.router.navigate(['/inicio'])
      }
    }) 
    this.auth.authState.subscribe(user => {
      if(user) {
        this.usuario_activo = true
      }
      else{
        this.usuario_activo = false
      }
    }) 
  }
  iniciarSesion(){
    this.auth.signInWithEmailAndPassword(this.form.correo, this.form.contrasena).then((userCredential)=>{
      const user = userCredential.user;
      console.log (user)
      alert("¡Bienvenido!")
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
  cerrarSesion(){
    this.auth.authState.subscribe(user=> {
      if (user) {
        this.auth.signOut().then(() => {
          localStorage.removeItem('user');
          alert("¡Sesion Finalizada!")
          window.location.reload()
        })
      }
      else{
        this.router.navigate(['/inicio'])
      }
    })
  }
}
