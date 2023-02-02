import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarScriptsService } from "./../../cargar-scripts.service"


@Component({
  selector: 'app-vistainicio',
  templateUrl: './vistainicio.component.html',
  styleUrls: ['./vistainicio.component.css']
})
export class VistainicioComponent implements OnInit {
  dataUser: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router, private CargaScripts: CargarScriptsService) 
    {
      CargaScripts.carga(["carrusel/carrusel"]);
    }


    ngOnInit(): void {
      this.afAuth.currentUser.then(user => {
        if(user && user.emailVerified) {
          this.dataUser = user;
          console.log(user)
        } else {
          this.router.navigate(['/vistainicio']);
        }
      })
    }
  
    logOut() {
      this.afAuth.signOut().then(() => this.router.navigate(['/login']));
    }
  
  }