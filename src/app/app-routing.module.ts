import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponent } from './new-student/new-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:"viewstudent",component:ViewStudentComponent},
  {path:"addstudent",component:NewStudentComponent},
  {path:"updatestudent/:id",component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
