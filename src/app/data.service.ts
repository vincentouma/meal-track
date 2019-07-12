import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
   meals = [
     {Name: 'Chapati', Desc:'brown', Calories:200},
     {Name: 'Githeri', Desc:'mix', Calories:70},
     {Name: 'Pilau', Desc:'Rice', Calories:500},
     {Name: 'Chafua', Desc:'chapo and soup', Calories:648}
   ];


   addMeal(){
     return "Meal Added Successfuly";
   }
   GetMeals(){
     return this.meals;
   }

}
