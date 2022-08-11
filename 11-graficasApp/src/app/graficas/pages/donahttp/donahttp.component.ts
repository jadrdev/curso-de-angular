import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donahttp',
  templateUrl: './donahttp.component.html',
  styles: [],
})
export class DonahttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: []
    },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private GraficasService: GraficasService) {}

  ngOnInit(): void {
    this.GraficasService.getUsuariosRedesSociales().subscribe((data) => {
      console.log(data);
      const labels = Object.keys(data)
        const datos = Object.values(data)
      this.doughnutChartData = {
        labels: Object.keys(data),
        datasets: [{ data: Object.values(data) }]
      }
    }
    );
  }
}
