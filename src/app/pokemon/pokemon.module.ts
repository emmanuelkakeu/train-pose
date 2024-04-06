import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetaillePokemonComponent } from './detaille-pokemon/detaille-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const pokemonRoutes: Routes = [
  { path: 'edite/pokemon/:id', component: EditPokemonComponent},
  { path: 'pokemon/:id', component:DetaillePokemonComponent},
  { path: 'pokemons', component: ListPokemonComponent},


];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetaillePokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],

  providers: [PokemonService]

})
export class PokemonModule { }
