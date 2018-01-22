import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
 import{ RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path:'stories', component:StoriesComponent},
    {path:'books', component:BooksComponent},
    {path:'', redirectTo:'/stories', pathMatch:'full'},
    {path:'**' ,redirectTo:'/stories', pathMatch:'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent
  ],
  imports: [
      BrowserModule, FormsModule , HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
