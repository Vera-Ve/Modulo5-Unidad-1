import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  item: string = '';
  list: string[] = [];
  addItem() {
    this.list.push(this.item);
    this.item = '';

  }
deleteItem(element:string) {
  const index = this.list.indexOf(element);
  if (index !==-1) {
  this.list.splice(index,1);
}
    
  }
}
