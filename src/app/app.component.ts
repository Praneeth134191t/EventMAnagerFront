import { Component } from '@angular/core';
import {CookieService} from 'ng2-cookies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	  constructor(private cookieService:CookieService) {
this.cookie=cookieService.get('token');
   }
   cookie:String;
  public model = 1;
}
