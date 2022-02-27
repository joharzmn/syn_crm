import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddEditUserComponent } from '../../../modules/users/add-edit-user/add-edit-user.component';
export interface UserElement {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  status: string;
  phone: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {
  isLoading = false;

  ELEMENT_DATA: UserElement[] = [
    {
      id: 1,
      firstName: "Test",
      lastName: "1",
      phone: "0303",
      username: "test1@gmail.com",
      status: "active"
    },
    {
      id: 2,
      firstName: "Test",
      lastName: "2",
      phone: "0303",
      username: "test2@gmail.com",
      status: "active"
    }
  ];
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'phone', 'status','action'];
  dataSource = new MatTableDataSource<UserElement>(this.ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any> | undefined;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService, public dialog: MatDialog) { }


  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.isLoading = true;

    this.getData();
    setTimeout(function(){
    }, 10000);
    this.isLoading = false;

  }

  async getData(){
    let response = await this.userService.getUsers();
    response.subscribe(data => {
      console.log('data is: ', data);

      this.dataSource.data = data as UserElement[];
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '400px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });


  }
  addRowData(row_obj: UserElement){
    var d = new Date();
    this.dataSource.data.push(row_obj);
    this.dataSource._updateChangeSubscription();
  }
  updateRowData(row_obj: UserElement){
    this.dataSource.data.forEach((value: UserElement)=>{
      if(value.id === row_obj.id){
        value.firstName = row_obj.firstName;
        value.lastName = row_obj.lastName;
        value.username = row_obj.username;
        value.phone = row_obj.phone;
        value.status = row_obj.status;
      }
      return true;
    });
  }
  deleteRowData(row_obj: UserElement){
    this.dataSource.data = this.dataSource.data.filter((value: UserElement)=>{
      return value.id != row_obj.id;
    });
  }
}
