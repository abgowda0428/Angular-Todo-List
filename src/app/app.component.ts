import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  todoList: string = "" ;
  todoarray: any[] = [];

  ngOnInit(): void {

    const localData = localStorage.getItem('TodoItem');
    if(localData != null){
      this.todoarray = JSON.parse(localData);
    }
    
  }

 

  OnAdd() {
    
      this.todoarray.push(this.todoList); 
      localStorage.setItem('TodoItem',JSON.stringify(this.todoarray));
      this.todoList = "" ; 
  }

  OnClear(){
    this.todoList = "" ;
  }

  OnDelete(){
    
  }

  OnComplete(){

  }

}
