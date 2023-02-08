import { Component, EventEmitter, Output } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { PersonCecy } from 'src/app/login/restart/person-cecy';

@Component({
  selector: 'app-requests-search',
  templateUrl: './requests-search.component.html',
})
export class RequestsSearchComponent {

  // constructor(private requestService: RequestService) {}

  // requests: PersonCecy[] = [];

  // @Output() requestEmitter = new EventEmitter<Request>();

  // onInput(term: string) {
  //   if (term.length >= 2) {
  //     this.requestService
  //       .findByName(term)
  //       .subscribe((res) => (this.requests = res));
  //   }
  //   if (term.length === 0) this.requests = [];
  // }

  // onSelect(request: Request) {
  //   this.requestEmitter.emit(request);
  // }
  // ngOnInit(): void {}
}
