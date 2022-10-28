import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'calculator';
  operation: string = "";
  result: number | null = null;

  clearOperation(): void{
    this.operation = "";
    this.result = null;
  }

  cutLastSign(): void{
    this.operation = this.operation.slice(0, -1);
  }

  addToOperation(sign:string): void{
    this.operation += sign;
    this.result = null;
  }

  countResult(): void{
    this.result = eval(this.operation);
    this.operation = "";
    this.operation += this.result?.toString();
  }
}
