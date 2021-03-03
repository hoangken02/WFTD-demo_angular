import { Component, OnInit } from '@angular/core';

export interface IStudent{
  id: number;
  name: string;
  image: string;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
student: IStudent = {
  id: 1,
  name: 'GD',
  image: 'https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg'
};

student2: IStudent = {
  id: 1,
  name: 'doiler',
  image: ''
};

  constructor() { }

  ngOnInit(): void {
  }

}
