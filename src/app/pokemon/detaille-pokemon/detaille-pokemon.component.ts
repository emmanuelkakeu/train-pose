import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detaille-pokemon',
  templateUrl: './detaille-pokemon.component.html',

})
export class DetaillePokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){

    }

  ngOnInit() {

    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }

}

gotoPokemonList(){
  this.router.navigate(['/pokemons']);
}

gotoEditePokemon(pokemon:Pokemon){
  this.router.navigate(['/edite/pokemon', pokemon.id]);
}

}
