import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:any=[];


userForm2=new FormGroup({
  name:new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')]),
  contact:new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}')]),
  email:new FormControl('',[Validators.required, Validators.pattern('/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')]),
  gender:new FormControl(''),
});
  constructor() { }

  onSubmit(){
    this.user= this.userForm2.value;
    console.log(this.user);
    alert(this.user);
  }
  ngOnInit() {
       $('button').click(function(){
            alert('Hii');
       })
  }
}

