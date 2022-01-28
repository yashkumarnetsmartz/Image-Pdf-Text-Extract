import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageTextExtComponent } from './image-text-ext.component';
const routerConfig=[
  {path:'',component:ImageTextExtComponent}
]
@NgModule({
  declarations: [ImageTextExtComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,RouterModule.forChild(routerConfig) 
  ],
  providers:[]
})
export class ImageTextExtModule { }
