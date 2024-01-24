import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import QrCreator from 'qr-creator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit{

  constructor(private http: ApiService, private router: Router){}



  ngOnInit(): void {
    this.getQrcode()
  }

  data:any

  getQrcode(){


    QrCreator.render({
      text: "http://localhost:4200/scanne/scann_form",
      radius: 0.5, // 0.0 to 0.5
      ecLevel: 'H', // L, M, Q, H
      fill: '#000', // foreground color
      background: null, // color or null for transparent
      size: 250 // in pixels
      //@ts-ignore
    }, document.querySelector('#qr-code'));


  }
}
