import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit.model';


@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[];
  fruit! :Fruit;
  constructor() {
    this.fruits = [
      {idFruit: 1, nomFruit : "pomme", prixFruit  : 3000, datedebutsaison: new Date("06/01/2022")},
      {idFruit : 2, nomFruit : "fraise", prixFruit  : 450, datedebutsaison : new Date("03/01/2022")},
      {idFruit : 3, nomFruit :"pèche", prixFruit : 900, datedebutsaison : new Date("07/01/2022")}
  
    ];
   }
   listeFruit():Fruit[] {
    return this.fruits;
   }

   ajouterFruit( fruit: Fruit){
    this.fruits.push(fruit);
    }
    supprimerFruit( f: Fruit){
      //supprimer le produit prod du tableau produits
      const index = this.fruits.indexOf(f, 0);
      if (index > -1) {
      this.fruits.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }
      consulterFruit(id:number): Fruit{
       return this.fruit = this.fruits.find(p => p.idFruit == id)!;
        //return this.fruit;
        }
        updateFruit(f:Fruit)
        {
        // console.log(p);
        this.supprimerFruit(f);
        this.ajouterFruit(f);
        this.trierFruits();
        }
        trierFruits(){
          this.fruits = this.fruits.sort((n1,n2) => {
          if (n1.idFruit!>n2.idFruit!){
               return 1;
          }
          if (n1.idFruit! < n2.idFruit!) {
               return -1;
          }
          return 0;
          }
          );}
      
}
