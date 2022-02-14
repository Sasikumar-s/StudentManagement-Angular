import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentinfo:any;
  studentInformation:any
  id:number=0
  name:string='';
  year:number=1;
  dept:string=''
  url="https://localhost:3000/posts"
  constructor(private service:StudentService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private fb:FormBuilder) {  }
    
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data=>
      {
        this.studentinfo=data;
        console.log(this.studentinfo);
        
      },error=>{
        console.log(error);
        
      })
  }

  onSubmit(){
    this.service.putcall(this.id,this.studentinfo).subscribe(data=>{
      console.log("Success full");
      this.route.navigate(['viewstudent'])
      
    },error=>console.log(error));

  }

}
