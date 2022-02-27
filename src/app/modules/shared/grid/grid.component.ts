import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddEditUserComponent } from '../../../modules/users/add-edit-user/add-edit-user.component';
export interface UserElement {
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

  ELEMENT_DATA: UserElement[] = [];
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
  addRowData(row_obj: { name: any; }){


  }
  updateRowData(row_obj: any){

  }
  deleteRowData(row_obj: any){

  }
}
