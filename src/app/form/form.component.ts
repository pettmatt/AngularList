import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { List } from '../list';
import { ListItemService } from '../list-item.service';

import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  sendForm;

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListItemService
    ) { 
    this.sendForm = this.formBuilder.group({
      type: '',
      text: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(newTodo) {
    this.listService.SendToList(newTodo);
    this.sendForm.reset();
  }
}
