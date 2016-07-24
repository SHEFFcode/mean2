import { Component } from '@angular/core';
import {PropertyBdingComponent} from "./property-bding.component";
import {EventBindingComponent} from "./event-binding.component";
import {TwoWayBindingComponent} from "./two-way-binding.component";

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBdingComponent, EventBindingComponent, TwoWayBindingComponent]
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  onTest() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
