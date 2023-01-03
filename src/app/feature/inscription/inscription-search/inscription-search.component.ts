import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inscription } from '../inscription';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription-search',
  templateUrl: './inscription-search.component.html',
})
export class InscriptionSearchComponent implements OnInit {
  constructor(private inscriptionService: InscriptionService) {}

  inscriptions: Inscription[] = [];

  @Output() inscriptionEmitter = new EventEmitter<Inscription>();

  onInput(term: string) {
    if (term.length >= 2) {
      this.inscriptionService
        .findByName(term)
        .subscribe((res) => (this.inscriptions = res));
    }
    if (term.length === 0) this.inscriptions = [];
  }

  onSelect(inscription: Inscription) {
    this.inscriptionEmitter.emit(inscription);
  }
  ngOnInit(): void {}
}
