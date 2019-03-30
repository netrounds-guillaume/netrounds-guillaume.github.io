import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent { }

@NgModule({
  imports: [ CommonModule, DxScrollViewModule ],
  exports: [ SingleCardComponent ],
  declarations: [ SingleCardComponent ]
})
export class SingleCardModule { }
