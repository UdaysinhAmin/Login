import { Register } from './../login/DTO/register';
import { RegisterService } from './../services/register.services';
import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
   
    constructor(
        private RegisterService: RegisterService,
        private location: Location
    ) {}
model:any={};
    ngOnInit() { }

    register(){
        var data = this.model;
        debugger
        this.RegisterService.registrerUser(this.model).then(() => this.goBack());
    }
    goBack(): void {
        this.location.back();
      }
}