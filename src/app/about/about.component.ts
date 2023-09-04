import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mostrarHtml:boolean = false;
  mostrarCss:boolean = false;
  mostrarJS:boolean = false;
  mostrarAngular:boolean = false;
  mostrarBootstrap:boolean = false;
  mostrarJava:boolean = false;
  mostrarSpringBoot:boolean = false;
  mostrarAndroid:boolean = false;
  mostrarTS:boolean = false;
  mostrarGit:boolean = false;
  mostrarJquery:boolean = false;
  mostrarMysql:boolean = false;
  mostrarJpa:boolean = false;
  mostrarJwt:boolean = false;
  mostrarMaven:boolean = false;
  mostrarHibernate:boolean = false;
  ocultar:boolean = true;
  html:string = "Html";
  css:string = "Css";
  js:string = "JavaScript";
  bs:string = "Bootstrap";
  angular:string = "Angular";
  java:string = "Java";
  mysql:string = "Mysql";
  git:string = "Git";
  jquery:string = "jQuery";
  ts:string = "TypeScript";
  springboot:string = "Spring Boot";
  android:string = "Android Studio";
  hibernate:string = "Hibernate";
  jpa:string = "JPA";
  jwt:string = "JWT"
  maven:string = "Maven"



  constructor() { }

  ngOnInit(): void {

}



}
