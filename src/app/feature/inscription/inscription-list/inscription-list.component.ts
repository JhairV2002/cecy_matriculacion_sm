import { Component, OnInit } from '@angular/core';
import { Inscription } from '../inscription';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
})
export class InscriptionListComponent implements OnInit {
  constructor(private inscriptionService: InscriptionService) {}

  inscriptionList: Inscription[] = [];

  ngOnInit(): void {
    // this.findAll();
  }

  /**
   * findAll
   */
  // public findAll(): void {
  //   this.inscriptionService.findAll().subscribe(
  //     (response) => this.inscriptionList = response.filter(inscription => inscription.enabled));
  // }
  /**
   * findByName
   */
  // public findByName(term: string): void {
  //   if (term.length >= 2) {
  //     this.inscriptionService
  //       .findByName(term)
  //       .subscribe((response) => (this.inscriptionList = response));
  //   }
  //   if (term.length === 0) this.findAll();
  // }
}
