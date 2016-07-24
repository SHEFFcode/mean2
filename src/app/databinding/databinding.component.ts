import { Component } from '@angular/core';
import {PropertyBdingComponent} from "./property-bding.component";

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBdingComponent]
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  onTest() {
    return true;
  }
}
