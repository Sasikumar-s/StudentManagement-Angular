import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  studentinfo:any
  depart=['Computer Science And Engineering','Electrical engineering','Civil engineering','Mechanical engineering']
  constructor(private fb:FormBuilder,
    private service:StudentService,
    private route:Router) {
      this.studentinfo=new FormControl();
     }
url="http://localhost:3000/posts"
  ngOnInit(): void {
    this.studentinfo=this.fb.group({
      id:[,Validators.required],
      name:[],
      dept:[],
      year:[]

    })
  }
  submitData(){
    this.service.addStudent(this.url,this.studentinfo.value).subscribe(
      (data)=>{
        console.log(data)
        this.route.navigate(['viewstudent'])
      },(error)=>{
        console.log(error);
      })
  }

}
