import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageTextExtModule } from './image-text-ext/image-text-ext.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageTextExtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
