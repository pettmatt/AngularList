import { Component, OnInit, Input } from '@angular/core';
import { ListItemService } from '../list-item.service';
import { trigger, style, animate, transition, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    // Child animation
    trigger('list', [
      transition(':enter', [
        query('@items',
          stagger(500, animateChild()),
          {optional:true}
        )
      ]),
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1.5s 0.5s cubic-bezier(.8, -0.3, 0.6, 1.2)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ]),
    trigger('header', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ]),
    trigger('empty', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s 0.7s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ])
  ]
})
export class ListComponent implements OnInit {
  @Input() listName: string;
  list = [];
  
  constructor(private listService: ListItemService) {
  }

  ngOnInit() {
    
    setInterval(()=> {
      this.Update(); 
    }, 500);
    

    //this.Update();

    console.log(this.list);
  }

  // Hae lista, joka sisältää tähän listaan kuuluvaa sisältöä
  Update(): void {
    this.list = [];
    this.listService.GetList(this.list, this.listName);
    //this.listService.GetList(this.list, this.listName).subscribe(list => this.list = list);
  }

  remove(index, text) {
    if(!this.list.length) return;
    this.list.splice(index, 1);
    this.listService.Delete(text, this.listName);
  }
}