import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],searchKey:string): any[] {

    const result:any = []

    if(!recipes || searchKey==""){
      return recipes
  }else{
    recipes.forEach((item:any)=>{
        if(item['name'].toLowerCase().includes(searchKey.toLowerCase())){
          result.push(item)
        }
      })
  }
  return result;
  }

}
