import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../services/user.service";

@Component({
  selector: 'app-user-tool-bar',
  templateUrl: './user-tool-bar.component.html',
  styleUrls: ['./user-tool-bar.component.scss']
})
export class UserToolBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }
}
