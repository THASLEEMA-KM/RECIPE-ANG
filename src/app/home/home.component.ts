import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  p: number = 1;
  searchKey:string = ""
recipes:any = []
// allRecipes:any = []

constructor(private api:ApiService){}


ngOnInit(): void {
this.getAllRecipes()
  
}



getAllRecipes(){
  this.api.getAllRecipeAPI().subscribe((result:any)=>{
    this.recipes = result
    console.log(this.recipes);
    
  })
}

listByLunch(){
  this.api.getAllRecipeAPI().subscribe((result:any)=>{
    // this.recipes = result.filter((recipe:any)=>recipe.mealType=="Lunch")
    this.recipes = result.filter((recipe:any)=>recipe.mealType.includes("Lunch"))
  })


}
listByDinner(){
  this.api.getAllRecipeAPI().subscribe((result:any)=>{
    // this.recipes = result.filter((recipe:any)=>recipe.mealType=="Dinner")
    this.recipes = result.filter((recipe:any)=>recipe.mealType.includes("Dinner"))

  })}
listBySnack(){
  this.api.getAllRecipeAPI().subscribe((result:any)=>{
    // this.recipes = result.filter((recipe:any)=>recipe.mealType=="Breakfast")
    this.recipes = result.filter((recipe:any)=>recipe.mealType.includes("Snack"))

  })}
  listByBreakFast(){
    this.api.getAllRecipeAPI().subscribe((result:any)=>{
      // this.recipes = result.filter((recipe:any)=>recipe.mealType=="Breakfast")
      this.recipes = result.filter((recipe:any)=>recipe.mealType.includes("Breakfast"))

    })}

}
