import {Component, OnInit} from '@angular/core';
import {DnmaService} from "../../service/dnma.service";

@Component({
  selector: 'app-eb1',
  templateUrl: './eb1.component.html',
  styleUrls: ['./eb1.component.css']
})
export class Eb1Component implements OnInit {

  dataset!: any;

  constructor(private dnmaService: DnmaService) {
  }

  ngOnInit(): void {
    this.dnmaService.findMostVisitedWeek().subscribe(
      (response: any) => {
        this.dataset = response.results;
        console.log(this.dataset);
      }, error => {
        console.log(error);

      }
    );

  }


}
