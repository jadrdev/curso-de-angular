import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private HeroesService: HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params
      .pipe(switchMap(({ id }) => this.HeroesService.getheroePorid(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guadar() {
    if (this.heroe.superhero.trim().length === 0) {
      console.log(this.heroe);
      return;
    }

    if (this.heroe.id) {
      //Actualizar
      this.HeroesService.editarHeroe(this.heroe).subscribe((heroe) =>
        this.MostrarSnackBar('Heroe actualizado')
      );
    } else {
      //Crear
      this.HeroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.MostrarSnackBar('Heroe creado');
        this.router.navigate(['/heroes/editar', heroe.id]);
      });
    }
  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.heroe
    })

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.HeroesService.borrarHeroe(this.heroe.id!).subscribe(() => {
          this.MostrarSnackBar('Heroe borrado');
          this.router.navigate(['/heroes']);
        });
      }
    })
  }

  MostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500,
    });
  }
}
