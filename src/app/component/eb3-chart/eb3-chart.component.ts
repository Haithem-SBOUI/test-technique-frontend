import {Component, OnInit} from '@angular/core';
import {DnmaService} from "../../service/dnma.service";
import {ActivatedRoute} from "@angular/router";
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-eb3-chart',
  templateUrl: './eb3-chart.component.html',
  styleUrls: ['./eb3-chart.component.css']
})
export class Eb3ChartComponent implements OnInit {
  dataset!: any;
  ordinateurList!: any;
  ordinateurList1: any = [3403, 32];
  smartphoneList!: any;
  tabletteList!: any;
  newData!: any;
  chartOrdinateur!: any;
  chartSmartphone!: any;
  chartTablette!: any;
  uai!: any;
  year!: any;



  constructor(private dnmaService: DnmaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.uai = this.route.snapshot.paramMap.get('uai');
    this.year = this.route.snapshot.paramMap.get('year');

    this.fetchData(this.uai, this.year);


  }

  fetchData(uai :string, year :string){
    this.dnmaService.eb3Chart(uai, year).subscribe(
      (response: any) => {
        this.dataset = response.results;
        console.log(this.dataset);
        this.ordinateurList = this.dataset.map((item :any) => (item["total_visits_ordinateur"]));

        this.smartphoneList = this.dataset.map((item :any) => (item["total_visites_smartphone"]));
        this.tabletteList = this.dataset.map((item :any) => (item["total_visites_tablette"]));
        this.chartSmartphone = new Chart({
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Nombre de visites par Smartphone'
            },
            credits: {
              enabled: false
            },
            series: [
              {
                name: 'Nombre de Visite',
                data: this.smartphoneList
              } as any
            ]
          }
        )

        this.chartOrdinateur = new Chart({
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Nombre de visites par ordinateur'
            },
            credits: {
              enabled: false
            },
            series: [
              {
                name: 'Nombre de Visite',
                data: this.ordinateurList
              } as any
            ]
          }
        )

        this.chartTablette = new Chart({
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Nombre de visites par Tablette'
            },
            credits: {
              enabled: false
            },
            series: [
              {
                name: 'Nombre de Visite',
                data: this.tabletteList
              } as any
            ]
          }
        )
        console.log("ordinateurList", this.ordinateurList);
        console.log("smartphoneList", this.smartphoneList);
        console.log("tabletteList", this.tabletteList);
      }, error => {
        console.log(error);
      }
    );
  }







}
