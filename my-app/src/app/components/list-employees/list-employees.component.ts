
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  public contactForm: FormGroup;
  public employee: any[] = [
    {
      id: 1, name: 'Duc', age: 12, address: "Hà Nam", phone: '1190848'
    }
  ]
  constructor(private formBuilder: FormBuilder) { 
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      id: [''],  
      name: [''],
      age:[''],
      address:[''],
      phone:['']
    });
  }

  onSubmit() {
    this.employee.push(this.contactForm.value);
  }
  ngOnInit() {
    
  }
 
}
