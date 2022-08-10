import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css'],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  ZoomLevel: number = 15;
  center: [number, number] = [-16.317691120223152, 28.439523816351837];

  //Array de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.ZoomLevel,
    });

    this.leerlocalStorage();
  }

  agregarMarcador() {
    /* Generating a random color. */
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.marcadores.push({
      color,
      marker: nuevoMarcador,
    });

    this.guadarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', () => {
      this.guadarMarcadoresLocalStorage();
    });
  }

  irMarcador(marcador: MarcadorColor) {
    this.mapa.flyTo({
      center: marcador.marker!.getLngLat(),
      zoom: this.ZoomLevel,
    });
  }

  guadarMarcadoresLocalStorage() {
    const lnglatArr: MarcadorColor[] = [];

    this.marcadores.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lnglatArr.push({
        color,
        centro: [lng, lat],
      });
    });
    localStorage.setItem('marcadores', JSON.stringify(lnglatArr));
  }

  leerlocalStorage() {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lnglatArr: MarcadorColor[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );
    console.log(lnglatArr);

    lnglatArr.forEach((element) => {
      const newMarker = new mapboxgl.Marker({
        color: element.color,
        draggable: true,
      })
        .setLngLat(element.centro!)
        .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: element.color,
      });

      newMarker.on('dragend', () => {
        this.guadarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove()
    this.marcadores.splice(i, 1)
    this.guadarMarcadoresLocalStorage()

  }
}
