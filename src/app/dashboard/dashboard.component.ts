import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UserDetails } from '../auth/users';
import { AuthService } from '../auth/auth.service';

@Component({

  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
value1 = '';
  constructor(private authService: AuthService) { }
  public userdata = new MatTableDataSource<UserDetails>();
  @ViewChild(MatPaginator) paginator;

  @ViewChild(MatTable) table:MatTable<any>;
  
  displayedColumns: string[] = ['name', 'mailid', 'mobilenumber', 'age'];


  ngOnInit() {
    this.authService.getData()
  .subscribe(response => {
    console.log(response)
    this.userdataResponse(response);
  });
  this.userdata.paginator = this.paginator;
 
  }
  userdataResponse(response) {
  
          this.userdata.data = response as UserDetails[];
   
    console.log(response)
  }
  

addRowData(){
this.userdata.data.push({
  name:this.value1,
  mailid:'mounika@gmail.com',
  mobile:'8768768',
  age :'23'

})
this.userdata = new MatTableDataSource(userData)
}
}


const  userData:UserDetails[]=[{
  name:"ravi",
  mailid:"ravi2gmail.com",
  mobile:"568678788",
  age:"23"
  },
  {
      name:"aavi",
      mailid:"ravi2gmail.com",
      mobile:"568678788",
      age:"23"
      },{
        name:"bavi",
          mailid:"ravi2gmail.com",
          mobile:"568678788",
          age:"23"
          },{
              name:"savi",
              mailid:"ravi2gmail.com",
              mobile:"568678788",
              age:"23"
              },{
                  name:"havi",
                  mailid:"ravi2gmail.com",
                  mobile:"568678788",
                  age:"23"
                  },
                  {
                      name:"ravi",
                      mailid:"ravi2gmail.com",
                      mobile:"568678788",
                      age:"23"
                      },{
                          name:"mavi",
                          mailid:"ravi2gmail.com",
                          mobile:"568678788",
                          age:"23"
                          },{
                              name:"lavi",
                              mailid:"ravi2gmail.com",
                              mobile:"568678788",
                              age:"23"
                              }]