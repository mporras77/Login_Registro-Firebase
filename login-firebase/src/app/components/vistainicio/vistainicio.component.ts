import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service"


@Component({
  selector: 'app-vistainicio',
  templateUrl: './vistainicio.component.html',
  styleUrls: ['./vistainicio.component.css']
})
export class VistainicioComponent implements OnInit {

  constructor( private CargaScripts: CargarScriptsService) 
    {
      CargaScripts.carga(["carrusel/carrusel"]);
    }

  ngOnInit(): void {
  }

}
