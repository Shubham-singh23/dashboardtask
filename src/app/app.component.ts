import { Component} from '@angular/core';
import { ConstantsService } from './services/constants/constants.service';
import { CacheService } from './services/cache/cache.service';
import { ChartData,ChartDataset, ChartOptions } from 'chart.js';
import { DataService } from './services/dataServices/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public constant : ConstantsService,
    public cache : CacheService,
    public dataSerivces: DataService
  ){}

  public tableName:String = "Today's Pending Petients";

  doughnutChartData1: ChartData<'doughnut'> = {
    datasets: [
      {
        data: [80,20],
        backgroundColor: ['#90E495','gray'],
        borderRadius: 5
      }
    ]
  };
  doughnutChartData2: ChartData<'doughnut'> = {
    datasets: [
      {
        data: [20,80],
        backgroundColor: ['#f25B5B','gray'],
        borderRadius: 5
      }
    ]
  };

  doughnutChartData3: ChartData<'doughnut'> = {
    datasets: [
      {
        data: [90,10],
        backgroundColor: ['#787878','#ededed'],
        borderRadius: 5
      },
      {
        data: [55,45],
        backgroundColor: ['#8f8f8f','#ededed'],
        borderRadius: 5
      },
      {
        data: [80,20],
        backgroundColor: ['#f7bebe','#ededed'],
        borderRadius: 5
      },
      {
        data: [60,40],
        backgroundColor: ['#c99191','#ededed'],
        borderRadius: 5
      },
      {
        data: [40,60],
        backgroundColor: ['#bf6060','#ededed'],
        borderRadius: 5
      }
    ]
  }

  doughnutChartOptions: ChartOptions<'doughnut'>={
    responsive: false,
    cutout: "65%"
  }
  

  doughnutChartOptions2: ChartOptions<'doughnut'>={
    responsive: false,
    cutout: "30%"
  }

  ngOnInit() {
  }

  selectMenu(data:any){
    this.cache.activeSidebarMenu = data.id;
  }

  showBy(data:any){
    this.cache.showBy = data.id;
  }

}
