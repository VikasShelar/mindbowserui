import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee=[{
    id:'1',
    firstName:'raj',
    lastName:'khan',
    address:'sawad',
    dob:'21/08/2021',
    mobile:567888888,
    city:'mahad'
  },{
    id:'1',
    firstName:'raj',
    lastName:'khan',
    address:'sawad',
    dob:'21/08/2021',
    mobile:567888888,
    city:'mahad'
  }]
  form = new FormGroup({
    id: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }),

    firstName: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
    lastName: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
    address: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
    dob: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
    mobile: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
    city: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
    }
    ),
  })
  constructor() { }

  ngOnInit(): void {
  }
onCreate(){
  const data={
    id:this.form.value.id,
    firstName:this.form.value.firstName,
    lastName:this.form.value.lastName,
    address:this.form.value.address,
    dob:this.form.value.dob,
    mobile:this.form.value.mobile,
    city:this.form.value.city
  }
this.employee.push(data);
console.log(this.employee)
}
}
