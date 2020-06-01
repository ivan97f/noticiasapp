import { Component, OnInit } from '@angular/core';

import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  cargarNoticias ( categoria: string ){

    this.noticiasService.getTopHeadlineCategoria( categoria)
    .subscribe( resp => {
      console.log(resp);
      this.noticias.push( ...resp.articles );
    });
  }

  ngOnInit(){

    this.cargarNoticias( this.categorias[0] );
  }

  cambioCategoria( event){
    this.noticias = [];
      console.log( event.detail.value);
      this.cargarNoticias( event.detail.value );
    }
  }

