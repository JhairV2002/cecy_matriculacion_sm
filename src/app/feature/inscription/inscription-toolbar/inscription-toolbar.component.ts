import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inscription-toolbar',
  templateUrl: './inscription-toolbar.component.html',
})
export class InscriptionToolbarComponent implements OnInit {
  @Input() entityName: string = '';
  @Output() termEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * onInput
   */
  public onInput(term: string) {
    this.termEmitter.emit(term);
  }
}
