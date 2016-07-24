import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-bding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBdingComponent {
  @Input() result: number = 0;
}
