import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isQuizComponent : string = 'quizComponent';

  @Input() correctAnswerCount :number = 0;
  @Input() wrongAnswerCount :number = 0;
}
