import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tchat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tchat.component.html',
  styles: [`
      .sidemenu{
        transform : translateX(0);
      }
  `]
})
export default class TchatComponent{

  cliker = false
  textComplet: string = "salut, j'espère que tu va bien, je suis une intelligence artificielle developé par onyotech et je peux t'aider dans tous ce que tu veux";
  texteAffiche: string = '';

  messages: string[] = [];

  ecrire(){
    let index = 0;
    const afficherCar = () => {
      this.texteAffiche = this.textComplet.substring(0, index);
      index++;
      if(index <= this.textComplet.length){
        setTimeout(afficherCar,50);
      }
    }
    afficherCar();
    this.cliker = true
  }


  valeurInput: String = "";
  gaff = "";
  send(){
   
      this.messages.push(String(this.valeurInput))
      this.valeurInput="";
      if(this.messages.find(str => str == 'salut')){
        this.cliker = true
        setTimeout(() => {
          this.ecrire();
        }, 1000);
      }else{
        this.textComplet = 'error'
        setTimeout(() => {
          this.ecrire();
        }, 1000);
      }
  }

  menuShow = false
  discussion(){
    this.menuShow = !this.menuShow
  }
}
