import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = ''
  heroes: Heroe[] = []

  heroeSelecionado!: Heroe | undefined

  constructor(private HeroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.HeroesService.getSugencias(this.termino.trim()).subscribe(
      (heroes) => (this.heroes = heroes)
    );
  }

  seleccionado(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSelecionado = undefined
      return;
    }

    const heroe: Heroe = event.option.value
    this.termino = heroe.superhero

    this.HeroesService.getheroePorid(heroe.id!)
      .subscribe(heroe => this.heroeSelecionado = heroe)
  }
}
