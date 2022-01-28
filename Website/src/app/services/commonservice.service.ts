import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { resolve } from 'url';
declare var config;
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }
  Post(url:string,files:File)
  {   
    return from(new Promise((resolve,reject)=>{
    let completeURL=config.url+url;
    let formData=new FormData();
    let xhr = new XMLHttpRequest()
    formData.append('Pdf',files,files.name);
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
        if(xhr.status==200)
        {
          resolve(JSON.parse(xhr.response));
        }else{
          reject(xhr.response);
        }
      }
    }
    xhr.open("POST",completeURL,true);
    xhr.setRequestHeader('Accept','application/json');
    xhr.send(formData)
  }));
  }
}
