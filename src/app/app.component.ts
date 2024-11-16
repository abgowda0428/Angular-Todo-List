import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  todoList: any[] = [];
  CompletedList :any[] =[];
  todoItems : any  = {
    todoId : "",
    todoContent :""
  }


  constructor(private router:Router){
    
  }

  ngOnInit(): void {
    const localData = localStorage.getItem("Todo");
    if(localData != null){
      this.todoList = JSON.parse(localData)
    }

  }

 

  OnAdd() {
    
    this.todoItems.todoId = this.todoList.length + 1;
    this.todoList.unshift(this.todoItems);
    localStorage.setItem('Todo',JSON.stringify(this.todoList))
    this.todoItems = {
      todoContent:"",
      todoId:""
    }
    
  }

  OnClear(){

    this.todoItems = {
      todoContent:"",
      todoId:""
    }

  }

  OnDelete(index:number){

   this.todoList.splice(index,1);
   localStorage.setItem("Todo",JSON.stringify(this.todoList));
    
  }

  OnComplete(index:number){

    const CompltedItem = this.todoList.splice(index,1)[0];

    this.CompletedList.push(CompltedItem)

  }

  navigateToNewComponent(){
    this.router.navigateByUrl("New")

  }

  OnDeleteCompleted(index:number){

    this.CompletedList.splice(index,1);
    localStorage.setItem("Todo",JSON.stringify(this.CompletedList));
     
   }
 

}
