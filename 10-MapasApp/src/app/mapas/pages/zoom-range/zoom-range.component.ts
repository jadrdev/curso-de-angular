import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  ZoomLevel: number = 10;
  center: [number, number] = [-16.317691120223152, 28.439523816351837];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => { })
    this.mapa.off('zoomend', () => { });
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.ZoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      this.ZoomLevel = this.mapa.getZoom();
    })

     this.mapa.on('zoomend', (ev) => {
       if (this.mapa.getZoom() > 18) {
         this.mapa.zoomTo(18)
       }
     });

    this.mapa.on('move', (event) => {
      const target = event.target
      const { lng, lat } = target.getCenter()
      this.center = [lng, lat]
    });
  }

  ZoomOut() {
    this.mapa.zoomOut();
  }

  ZoomIn() {
    this.mapa.zoomIn();

  }

  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor))

  }
}
