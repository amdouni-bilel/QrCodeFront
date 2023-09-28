import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePhoneComponent} from "./modules/phones/home-phone/home-phone.component";
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { MenuComponent } from './layouts/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { MultiDropdownComponent } from './modules/assign/multi-dropdown/multi-dropdown.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        MenuComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
