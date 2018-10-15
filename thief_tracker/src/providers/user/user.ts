import { Injectable } from '@angular/core';

@Injectable()
export class User {
  usuario: string;

  constructor() { }
  get() {  return this.usuario; } 
  set(usr: string) {
      console.log(usr);
      this.usuario = usr;
  }
}