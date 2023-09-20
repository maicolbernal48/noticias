import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-new',
  templateUrl: './noticia-new.page.html',
  styleUrls: ['./noticia-new.page.scss'],
})
export class NoticiaNewPage implements OnInit {


  detalleniticia:any =[];
  titlenew: string= ""
  datenew: string=""
  textnew: string =""
  shownew:string="" 
  text_smallnew:string=""
  text_longnew:string=""
  url_imagnew: string=""
  font_noticianew:string=""
                

  constructor(private route:Router) {}
  

  Navigate(link:any) {
    this.route.navigate([link])
  }
  ngOnInit() {
  this.detalleniticia=localStorage.getItem("notiDetail");
  this.detalleniticia= JSON.parse(this.detalleniticia)
  this.titlenew=this.detalleniticia.title
  this.url_imagnew=this.detalleniticia.url_imag
  this.datenew=this.detalleniticia.date
  this.text_longnew=this.detalleniticia.text_long
  this.shownew=this.detalleniticia.show

   
  }

  


}
