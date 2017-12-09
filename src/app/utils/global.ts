import { Injectable } from '@angular/core';

@Injectable()
export class Globals {


    TOKEN_KEY = "TOKEN";
    CURRENT_USER = "CURRENT_USER";
    TOKEN_LENGTH = 273;



    urls = {} as IDictionary;
    private serverAddress: string = "http://localhost:5000";


    constructor() {

        this.urls['login'] = this.serverAddress + '/api/auth/login';
        this.urls['register'] = this.serverAddress + 'register';
        this.urls['info'] = this.serverAddress + '/api/auth/info';
    }


}

interface IDictionary {
    [index: string]: string;
}