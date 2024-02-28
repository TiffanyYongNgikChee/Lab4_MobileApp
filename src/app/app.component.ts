import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponenetComponent } from './listcomponenet/listcomponenet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListcomponenetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  hide: boolean = true;
  count:number = 0;


  onClick() {
    this.count++;
  }
  
  ondoubleclick(){
    if(this.hide == false)
     this.hide = true;
    else
      this.hide = false;
  }
}
