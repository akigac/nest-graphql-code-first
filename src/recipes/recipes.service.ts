import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {

    console.log("start create")
    const test = new Recipe()
    test.id = "1"
    test.title = data.title
    test.description = "description"
    test.creationDate = new Date()
    test.ingredients = ["ingredient"]
    return test

    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {

    const test = new Recipe()
    test.id = "1"
    test.title = "title"
    test.description = "description"
    test.creationDate = new Date()
    test.ingredients = ["ingredient"]
    test.remark = "remark"
    return test

    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
