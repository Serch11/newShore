import { Component, OnInit } from '@angular/core';
import { GryffindorServeService } from './gryffindor-serve.service';
import { ActivatedRoute, Router, Params } from '@angular/router'
@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css']
})
export class GryffindorComponent implements OnInit {

  public listPersonaje: any[];
  public cantPersonaje: number;
  public buscarPorNombre = "";
  public buscar = "";

  constructor(
    private gryffindorService: GryffindorServeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params.id);

      this.gryffindorService.getGlyffindor(params.id).subscribe(

        (datos) => {
          this.listPersonaje = datos;
          this.listPersonaje.forEach((value, index, array) => {
            //console.log(value);
            this.cantPersonaje = 1 + index;
          })
        }
      )
    })


  }
}
