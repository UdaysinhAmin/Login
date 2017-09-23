
import { RegisterService } from './services/register.services';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
