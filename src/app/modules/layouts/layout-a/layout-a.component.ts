import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router"
import { fadeAnimation } from 'src/app/animations/fade-animation';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-layout-a',
  templateUrl: './layout-a.component.html',
  styleUrls: ['./layout-a.component.scss'],
  animations: [fadeAnimation]
})
export class LayoutAComponent implements OnInit {

  showSideMenu = true;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.sideNavToggleSubject.subscribe(() => {
      this.showSideMenu = !this.showSideMenu;
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
