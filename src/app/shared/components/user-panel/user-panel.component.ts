import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';
import { DxListModule } from 'devextreme-angular/ui/list';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode: string;
}

@NgModule({
  imports: [
    DxListModule,
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [ UserPanelComponent ],
  exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
