import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { jsonDataType } from '../types/jsondata.type';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class JsondataserviceService {
  private jsonUrl = `${environments.jsonUrl}`;
  private jsonUrlApi = `${environments.jsonUrlApi}`;

  constructor(private client: HttpClient) {}

  getJsonDataService(): Observable<jsonDataType[]> {
    return this.client.get<jsonDataType[]>(this.jsonUrl).pipe(
      catchError((error) => {
        console.log('Erro ao obter dados', error);
        return [];
      })
    );
  }

  getJsonDataServiceApi(): Observable<jsonDataType[]> {
    return this.client.get<jsonDataType[]>(this.jsonUrlApi).pipe(
      catchError((error) => {
        console.log('Erro ao obter dados da api', error);
        return [];
      })
    );
  }
}
