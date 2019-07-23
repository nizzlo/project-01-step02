import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Spec } from '../spec';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  details=[{id:"home"},{id:"profile"},{id:"feedback"}]
  
  data: Spec[];
  
  constructor(private ns: NotificationService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
  this.data = this.ns.getData();
}

}