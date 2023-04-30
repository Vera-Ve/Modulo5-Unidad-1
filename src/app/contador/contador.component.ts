import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
value: number = 0;
  increaseValue() {
    this.value ++;
}
decreaseValue() {
  if (this.value>0) {
    this.value--;
  }
}
resetValue() {
  this.value = 0;
}
}
