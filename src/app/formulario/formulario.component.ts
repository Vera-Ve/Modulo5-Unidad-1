import { Component } from '@angular/core';
interface User {
name: string;
lastName: string;
phoneNumber: string;
birthDate: Date;
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  user:User = {name:'', lastName:'', phoneNumber:'', birthDate: new Date()};
  userList: User[] = [];
addUser() {
  this.userList.push(this.user);
  this.user = {name:'', lastName:'', phoneNumber:'', birthDate: new Date()};
}
}
