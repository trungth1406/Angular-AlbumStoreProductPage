import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json"

  constructor(private _http: HttpClient) { }


  getAblbum(id : number){
    return this._http.get(this._albumUrl);
  }

}
