// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component && Declarations
import { AppComponent } from './app.component';
import { Routing } from './app.routes';

// -> Home Components
import { HomeComponent } from './Pages/Home/home.component';

// -> Layout Components
import { HeaderComponent } from './Components/_Layout/Header/header.component';
import { SidebarComponent } from './Components/_Layout/Sidebar/sidebar.component';

// -> MembershipProvider Components
import { LoginComponent } from './Pages/MembershipProvider/Login/login.component';
import { RegisterComponent } from './Pages/MembershipProvider/Register/register.component';
import { ResetComponent } from './Pages/MembershipProvider/Reset/reset.component';


// Decorator
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    // -> Layout Components
    HeaderComponent,
    SidebarComponent,

    // -> MembershipProvider Components 
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
