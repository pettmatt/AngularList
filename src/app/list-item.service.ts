import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { List } from './list';
import { IList } from './IList'

@Injectable({
  providedIn: 'root'
})

export class ListItemService {
  storageArray = [];
  
  constructor() {
    this.storageArray = List;
  }

  GetList(finalList:Array<any>, listName:string)/*: Observable<any>*/ {
    //const tempList = this.storageArray;
    this.storageArray.forEach(item => {
      if(item.type === listName) {
        finalList.push(item.text);
      }
    });

    return finalList;
  }

  SendToList(array) {
    this.storageArray.push(array);
  }

  Delete(text:string, listName:string) {
    let list = this.storageArray;
    let array = [];
    list.forEach(element => {
      if(element.type !== listName || element.text !== text) {
        array.push(element);
        console.log(element);
      }
    });
    this.storageArray = array;
    //console.log(array);
  }

  /*
  private listUrl = 'api/list';

  GetList(array:Array<any>, listName:string): Observable<IList[]> {
    return this.http.get<IList>(this.listUrl).subscribe.arguments.array.forEach(element => {
      if(element.type === listName) {
        array.push(element.text);
      }
    });
  }

  SendToList(array:IList){
    this.http.post(this.listUrl, array);
  }*/

  /*
  GetList(array:Array<any>, listName:string) {
    List.forEach(element => {
      if(element.type === listName) {
        array.push(element.text);
      }
    });
  }

  SendToList(array:IList){
    List.push(array);
  }*/

  /*
  Send(array) {
    this.storageArray.push(array);
    localStorage.setItem('json', JSON.stringify(this.storageArray));
  }

  GetStorage(array:Array<any>, listName:string) {
    let localArray:Array<any> = JSON.parse(localStorage.getItem('json'));
    localArray.forEach(element => {
      if(element.type === listName) {
        array.push(element.text);
      }
    });
  }*/
}
