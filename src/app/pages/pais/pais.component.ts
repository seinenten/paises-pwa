import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisInterface } from 'src/app/interfaces/paises.interface';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais!: PaisInterface;

  constructor(
    private paisService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id))
      ).subscribe( pais => {
        
        if( !pais ){
          this.router.navigateByUrl('/');
        }else{
          this.pais = pais
        }
      });
  }

}
