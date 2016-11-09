import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class GithubService {
    private username = 'MrAlexxx';
    private client_id = 'c9880b2e4e20cadc83a0';
    private client_Secret = '6d8cc76843e57fcf3f872ad02c6a4b74d15c3b9d';

    constructor(private _http:Http){
        console.log('Github service Init...');

    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());

    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());

    }

    updateUsername(username:string){
        this.username = username;

    }


}
