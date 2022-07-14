import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostRecommendationComponent } from './components/recommendation/post-recommendation/post-recommendation.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import {MatMenuModule} from '@angular/material/menu';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PostRecommendationComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatMenuModule,NoopAnimationsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
