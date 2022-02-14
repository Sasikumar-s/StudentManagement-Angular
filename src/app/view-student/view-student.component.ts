import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  data:any;
  id: any;
  url="http://localhost:3000/posts"
  constructor(private service:StudentService,
    private route:Router) { }

  ngOnInit(): void {
    this.getStudent();
  }
  private getStudent(){
    this.service.getStudent(this.url).subscribe(data=>{
       this.data=data
    })
  }
  updateStudent(id:number){
    this.route.navigate(['updatestudent',id]);
  }
  deleteStudent(id:number){
    this.service.deleteCall(id).subscribe(data=>{
      this.getStudent()
    },error=>{
      console.log(error);
    })
  }

}
