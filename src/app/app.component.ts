import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignement4-dataBinding';
  oddNums:number[] = [];
  evenNums:number[] = [];

  onIntervalFired(Numbers:number){
    if(Numbers % 2 ===0){
      this.evenNums.push(Numbers);
    }else{
      this.oddNums.push(Numbers);
    }
  }
}
