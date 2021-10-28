import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() showChange:EventEmitter<String> = new EventEmitter<string>();
  show:string;

  constructor() { }

  ngOnInit(): void {
    this.show="all";
  }

  
  all(){
    this.show="all";
    this.showChange.emit(this.show);
  }
  
  consoles(){
    this.show="Consoles";
    this.showChange.emit(this.show);
  }
  
  videoGames(){
    this.show="Games";
    this.showChange.emit(this.show);
  }

  PSGames(){
    this.show="PS Games";
    this.showChange.emit(this.show);
  }
  
  PCGames(){
    this.show="PC Games";
    this.showChange.emit(this.show);
  }

  XBOXGames(){
    this.show="XBOX Games";
    this.showChange.emit(this.show);
  }

  NintendoGames(){
    this.show="Nintendo Games";
    this.showChange.emit(this.show);
  }
}
