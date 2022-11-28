import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service"

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private CargaScripts: CargarScriptsService) 
  { 
    CargaScripts.carga(["fondo/fondo"]);
  }

  ngOnInit(): void {
  }

}
