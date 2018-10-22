import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() person:Object;
  constructor() { }

  ngOnInit() {
  }

}
