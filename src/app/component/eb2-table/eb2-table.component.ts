import {Component, OnInit} from '@angular/core';
import {DnmaService} from "../../service/dnma.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-eb2-table',
  templateUrl: './eb2-table.component.html',
  styleUrls: ['./eb2-table.component.css']
})
export class Eb2TableComponent implements OnInit {
  protected readonly Object = Object;
  dataset!: any;

  uai!: any;
  choix!: any;
  constructor(private dnmaService: DnmaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.uai = this.route.snapshot.paramMap.get('uai');
    this.choix = this.route.snapshot.paramMap.get('choix');

    this.fetchData(this.uai, this.choix);

  }

  fetchData(uai :string, choix :string){
    if(choix == "annee"){
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
