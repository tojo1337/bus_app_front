import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  private doc: Document = inject(DOCUMENT);

  getWindow(): Window | null {
    return this.doc.defaultView;
  }

  getLocation(): Location {
    return this.doc.location;
  }

  createElement(tag: string): HTMLElement {
    return this.doc.createElement(tag);
  }
}
