import { NoticiaNewPage } from './../noticia-new/noticia-new.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  listCategorys : any[]=[];
  listNoticias : any[]=[];
  Router: any;

  constructor(
    public http: HttpClient,
    public route: Router
    
  ) { }

  
  ngOnInit() {

    this.http.get('../../assets/noticias/noticias_all.JSON').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

    });
  }
  Navigate(value: any) {
 
  this.route.navigate(["/noticia-new",]);
  localStorage.setItem("notiDetail",JSON.stringify(value))

}
}
