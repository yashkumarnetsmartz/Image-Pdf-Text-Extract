import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
declare var Tesseract;
@Component({
  selector: 'app-image-text-ext',
  templateUrl: './image-text-ext.component.html',
  styleUrls: ['./image-text-ext.component.css']
})

export class ImageTextExtComponent implements OnInit {
  constructor(private commonservice:CommonserviceService) { }
  submitted: boolean = false;
  file;
  pdfValue;
  resultText: string = "";
  ngOnInit() {

  }
  onSelectFile(event) {
    this.resultText = "";
    this.pdfValue = "";
    this.pdfValue =event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      // Extracting Text from pdf
      if (event.target.result.indexOf('data:application/pdf;base64,') != -1) {
        this.fnExtractPdfText();
      }
      // Extracting Text from image
      else {
        Tesseract.recognize(event.target.result).then(x => {
          this.resultText = x.html;
        })
      }
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  onSubmit() {
    this.submitted = true;
  }
  onReset()
  {
    this.submitted = false;
    this.pdfValue="";
    this.resultText="";
  }
  fnExtractPdfText() {
    debugger
   this.commonservice.Post('api/extract-text-pdf',this.pdfValue[0])
   .subscribe(result=>{
    console.log(result);
    var data :any=result;
    this.resultText=data.Data.text;
   });
  }
}
