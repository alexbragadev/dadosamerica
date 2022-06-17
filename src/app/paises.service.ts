import { IPaises } from "./model/paises.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable(
    { providedIn: 'root' }
)
export class PaisesService {

    pais?: IPaises;
    resultado: any;
   
    url = 'http://localhost:8080/paises';
    urlInfoPais = 'https://servicodados.ibge.gov.br/api/v1/paises';
    urlCidadesPais = 'http://www.geonames.org/childrenJSON?geonameId';

    constructor(
        private http: HttpClient,         
        private messageService: MessageService
        ) { }

    getAllPaises() : Observable<IPaises[]> {
        return this.http.get<IPaises[]>(`${ this.url }/all`);
    }

    recebePaisSelecionado(pais: IPaises) {
        this.pais = pais;
    }

    getPaisSelecionado() {
        return this.pais;
    }

    getInfoPais(): Observable<any[]> {
        return this.http.get<any[]>(`${ this.urlInfoPais }/${this.pais?.sigla}`)
        .pipe(
            tap(_ => this.log('oi')),
            catchError(this.handleError<any>('updateHero'))
          );
    }

    getIndicadoresPais() {
        return this.http.get(`${ this.urlInfoPais }/${this.pais?.sigla}/indicadores`);
    }

    getCidadesPorCodPais() {
        return this.http.get(`${ this.urlCidadesPais }=${this.pais?.countryId}`);
    }

        /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
}