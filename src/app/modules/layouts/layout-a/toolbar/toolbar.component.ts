import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from "../../../services/page.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  showBars = true;
  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit(): void {
    // this.pageService.sideNavToggleSubject.subscribe(() => {
    //   this.showBars = !this.showBars;
    // });
  }

  goHome(){
    this.router.navigate(['/']);
  }

  toggleMenu() {
    console.log('inside toolbar and just clicked');
    this.pageService.toggle();
  };
}
