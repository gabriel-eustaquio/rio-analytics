import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { JsondataserviceService } from '../../services/jsondataservice.service';
import { PopulationByRegionType } from '../../types/populationByRegion';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  chart: any = null;
  chartDataJson: PopulationByRegionType[] = [];

  constructor(private service: JsondataserviceService) {
    Chart.register(...registerables);
    this.service.getJsonDataService().subscribe((data) => {
      const regionMap: { [key: string]: number } = {};
      data.forEach((country) => {
        const region = country.region;
        const population = Number(country.population);

        if (regionMap[region]) {
          regionMap[region] += population;
        } else {
          regionMap[region] = population;
        }

        this.chartDataJson = Object.keys(regionMap).map((region) => ({
          region,
          population: regionMap[region],
        }));
      });
      this.setChart();
    });
  }

  setChart() {
    this.chart = new Chart('chartPopulation', {
      type: 'bar',
      data: {
        labels: this.chartDataJson
          ? this.chartDataJson.map((item) => item.region)
          : [],
        datasets: [
          {
            label: 'Distribuição de população por região',
            data: this.chartDataJson
              ? this.chartDataJson.map((item) => item.population)
              : [],
            backgroundColor: '#B2470A',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#474D59',
            },
          },
          x: {
            ticks: {
              color: '#474D59',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#474D59',
            },
          },
        },
      },
    });
  }
}
