import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { CountryInfo, EnergyDescription, Monitor, Service as DataService, Task } from 'src/app/shared/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ DataService ],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  // @ViewChildren(DxChartComponent) charts: QueryList<DxChartComponent>;

  options: GridsterConfig;
  dashboard: GridsterItem[];

  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];

  monitors: Monitor[];
  tasks: Task[];

  constructor(service: DataService) {
    // this.dashboard = [{
    //     x: 0,
    //     y: 0,
    //     rows: 1,
    //     cols: 1
    //   }];

    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();

    this.monitors = service.getEmployees();
    this.tasks = service.getTasks();
  }

  ngOnInit() {

    this.options = {
      // itemResizeCallback: this.gridsterItemChange,
      // itemChangeCallback: this.gridsterItemChange,
      pushItems: true,
      margin: 5,
      displayGrid: DisplayGrid.None,
      // minCols: 2,
      // maxCols: 10,
      // minRows: 1,
      setGridSize: true,
      gridType: GridType.ScrollVertical,
      resizable: {
          enabled: true
      },
      draggable: {
          enabled: true
      },
      itemResizeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => {
        // update DB with new size
        // send the update to widgets
        // this.resizeEvent.emit({item, itemComponent});
      }
      // gridType: GridType.ScrollVertical,
      // compactType: CompactType.None,
      // pushItems: true,
      // draggable: {
      //   enabled: true
      // },
      // resizable: {
      //   enabled: true
      // }
    };

    this.dashboard = [
      // {cols: 2, rows: 1, y: 0, x: 0},
      // {cols: 2, rows: 2, y: 0, x: 2},
      // {cols: 1, rows: 1, y: 0, x: 4},
      // {cols: 3, rows: 2, y: 1, x: 4},
      // {cols: 1, rows: 1, y: 4, x: 5},
      // {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 6, rows: 2, y: 0, x: 0, type: 'es'},
      {cols: 6, rows: 4, y: 4, x: 0, type: 'line'}
      // cols: 2, rows: 1, y: 2, x: 2},
      // {cols: 1, rows: 1, y: 3, x: 4},
      // {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  // gridsterItemChange = (gridsterItem: GridsterItem) => {
  //   this.charts.forEach(chart => {
//
  //     const p = chart.instance.element().parentElement;
  //     const size = {
  //       width: p.clientWidth,
  //       height: p.clientHeight,
  //     };
//
  //     chart.instance.option('size', size);
  //   });
  // }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item: GridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({} as GridsterItem);
  }
}
