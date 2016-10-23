// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component && Declarations
import { AppComponent } from './app.component';
import { Routing } from './app.routes';

// -> Home Components
import { HomeComponent } from './Components/Home/home.component';

// -> MembershipProvider Components
import { LoginComponent } from './Components/MembershipProvider/Login/login.component';
import { RegisterComponent } from './Components/MembershipProvider/Register/register.component';
import { ResetComponent } from './Components/MembershipProvider/Reset/reset.component';


// Decorator
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    LoginComponent,
    RegisterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
