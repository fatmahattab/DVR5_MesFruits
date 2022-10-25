import { Component, OnInit } from '@angular/core';
import { Fruit } from '../model/fruit.model';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {
  newFruit = new Fruit();
  message: string="";
  constructor(private fruitService: FruitService) { 

  }

  ngOnInit(): void {
  }
  addFruit(){
   // console.log(this.newFruit);
   this.fruitService.ajouterFruit(this.newFruit);
   this.message="Produits "+this.newFruit.nomFruit +" ajouté avec succés !" ;
    }

}
