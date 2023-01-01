import {
  AfterContentInit ,
  AfterViewInit , ChangeDetectorRef ,
  Component ,
  ComponentRef ,
  OnInit ,
  ViewChild ,
  ViewContainerRef
} from '@angular/core';
import { UserHomeComponent } from "./user-home/user-home.component";


@Component ( {
  selector : 'user-home' ,
  templateUrl : './home.component.html' ,
  styleUrls : [ './home.component.css' ]
} )
export class HomeComponent implements OnInit , AfterViewInit {

  time : Date = new Date ();
  @ViewChild ( "viewContainerRef" , { read : ViewContainerRef } ) vcr! : ViewContainerRef;

  constructor ( private cdr : ChangeDetectorRef ) {
  }

  ngOnInit () {

    setInterval ( () => {
      this.time = new Date ();
    } , 1 );
  }


  AddUserHome () {
    this.vcr.clear ();
    this.vcr.createComponent ( UserHomeComponent )
  }

  ngAfterViewInit () : void {
    this.AddUserHome ();
    this.cdr.detectChanges ();
  }


}
