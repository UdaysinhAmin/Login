import { RegisterService } from './../services/register.services';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor( private RegisterService: RegisterService,) { }

    ngOnInit() { }
    model : any ={};
    login(){
        debugger
        this.RegisterService.login(this.model).then( );
    }
}