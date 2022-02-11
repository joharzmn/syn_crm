import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router"
import { fadeAnimation } from 'src/app/animations/fade-animation';

import { LoginComponent} from '../../login/login/login.component';

@Component({
  selector: 'app-layout-b',
  templateUrl: './layout-b.component.html',
  styleUrls: ['./layout-b.component.scss'],
  animations: [fadeAnimation]
})
export class LayoutBComponent implements OnInit {
  showLoginForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
