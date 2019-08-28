import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdelete',
  templateUrl: './studentdelete.component.html',
  styleUrls: ['./studentdelete.component.scss']
})
export class StudentdeleteComponent implements OnInit {

  constructor(private student: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      var id = param.id;
      this.student.deleteStudent(id).subscribe(data=>{
        console.log(data);
        this.router.navigate(['student']);
      });
    });
  }

}
