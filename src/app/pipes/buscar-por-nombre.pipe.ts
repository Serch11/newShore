import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPorNombre'
})
export class BuscarPorNombrePipe implements PipeTransform {

  transform(nombres: any, arg: any): any {

    //console.log(nombres)
    const buscarpornombre = [];

    for (const recorrido of nombres) {
      if (recorrido.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        buscarpornombre.push(recorrido)
      }
    }
    return buscarpornombre;
  }

}
