import {Component, OnInit} from '@angular/core';
import {DnmaService} from "../../service/dnma.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-eb3-chart',
  templateUrl: './eb3-chart.component.html',
  styleUrls: ['./eb3-chart.component.css']
})
export class Eb3ChartComponent implements OnInit {
  dataset!: any;

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
    if(year == "annee"){
      this.byYear(uai);
    }else{
      this.byMonth(uai);
    }
  }
  byYear(uai: string) {
    this.dnmaService.findByYearAndUai(uai).subscribe(
      (response: any) => {
        this.dataset = response.results;
        console.log(this.dataset);
      }, error => {
        console.log(error);

      }
    );
  }

  byMonth(uai: string) {
    this.dnmaService.findByMonth(uai).subscribe(
      (response: any) => {
        this.dataset = response.results;
        this.dataset.sort((a: any, b: any) => a["month(debutsemaine)"] - b["month(debutsemaine)"]);
        console.log(this.dataset);
      }, error => {
        console.log(error);

      }
    );
  }

}
