import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router) { 
    console.log('StartScreenComponent constructor');
  }

  newGame() {
    this.router.navigate(['/game']);
  }

  ngOnInit() {
    console.log('ON LOAD ');
    console.log(this.router);
  }
}
