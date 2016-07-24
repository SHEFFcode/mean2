import { Component } from '@angular/core';
import { OtherComponent } from "./other/other.component";
import {AnotherComponent} from "./other/another.component";
import {DatabindingComponent} from "./databinding/databinding.component";
import {LifecycleComponent} from "./lifecycle.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent, DatabindingComponent, LifecycleComponent]
})
export class AppComponent {
  title = 'app works!';
  delete = false;
  test = 'string value';
  boundValue = 1000;
}
