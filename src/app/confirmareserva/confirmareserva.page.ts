import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmareserva',
  templateUrl: './confirmareserva.page.html',
  styleUrls: ['./confirmareserva.page.scss'],
})
export class ConfirmareservaPage implements OnInit {

  public id: Number;

  constructor(public act: ActivatedRoute) { }

  ngOnInit() {

    this.act.params.subscribe(objeto =>{
      this.id = objeto['id_prop'];
    });

    console.log(this.id);

  }

}
