import { Component, signal } from '@angular/core';
import { JsondataserviceService } from '../../services/jsondataservice.service';
import { jsonDataType } from '../../types/jsondata.type';
import { ChartComponent } from '../../components/chart/chart.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ChartComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  dataJson = signal<jsonDataType[] | null>(null);
  dataJsonApi = signal<jsonDataType[] | null>(null);

  constructor(private service: JsondataserviceService) {
    this.service.getJsonDataService().subscribe({
      next: (data) => {
        this.setDataJson(data as jsonDataType[]);
      },
      error: (error) => {
        console.log('Ocorreu um erro ao tentar visualizar os dados: ' + error);
      },
      complete: () => {
        return true;
      },
    });

    this.service.getJsonDataServiceApi().subscribe({
      next: (data) => {
        this.setDataJsonApi(data as jsonDataType[]);
      },
      error: (error) => {
        console.log('Ocorreu um erro ao tentar visualizar os dados: ' + error);
      },
      complete: () => {
        return true;
      },
    });
  }

  setDataJson(data: jsonDataType[]) {
    this.dataJson.set(data);
  }

  setDataJsonApi(data: jsonDataType[]) {
    this.dataJsonApi.set(data);
  }
}
