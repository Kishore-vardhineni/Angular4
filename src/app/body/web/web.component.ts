import { Component, OnInit } from '@angular/core';
import { WebService } from '../../shared/webservice';
import { Iangular } from '../web/web';
// import { Observable } from 'rxjs/internal/Observable';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  providers:[ WebService ]
})
export class WebComponent implements OnInit {

  Prodt:any=[];
  statusCode: number;
  productObj:object=[];

  constructor(private _webService:WebService) { }

  userForm1=new FormGroup({
    id:new FormControl('',[Validators.required, Validators.minLength(4)]),
    title:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required]),
  });

  ngOnInit() {
   this.getWebData();
   }
   
    getWebData(){
       this._webService.getWebDetail()
       .subscribe(Data=>this.Prodt=Data,
      errorCode =>  this.statusCode = errorCode);
   }
  
  //  addWebData(){
  //   this.onSubmit()
  //    this._webService.addWebDetail(user)
  //   .subscribe(data=>{
  //     console.log(data);
  //   },
  //   err=>{
  //      throw err;
  //   }
  // );
  //  }
  
  onSubmit(){
    var user=this.userForm1.value; 
 }
}
