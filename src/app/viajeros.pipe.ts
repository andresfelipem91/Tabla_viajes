import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class ViajerosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!arg || arg?.length < 3) return value;
   const resultViajeros = [];
   for(const viajero of value){

    if(viajero.User_Name.indexOf(arg) > -1){
      resultViajeros.push(viajero);

    }
    if (viajero.Subject.indexOf(arg) > -1) {
      resultViajeros.push(viajero);
    }
    if (viajero.Customer_Satisfaction.indexOf(arg) > -1) {
      resultViajeros.push(viajero);
    }
    if(viajero.Status.indexOf(arg) > -1){
      resultViajeros.push(viajero);

    };
   };
console.log(resultViajeros);
   return resultViajeros;
  }

}
