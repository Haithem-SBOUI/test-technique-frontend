import {Component, OnInit} from '@angular/core';
import {DnmaService} from "../../service/dnma.service";

@Component({
  selector: 'app-eb2-form',
  templateUrl: './eb2-form.component.html',
  styleUrls: ['./eb2-form.component.css']
})
export class Eb2FormComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dataset!: any;

  constructor(private dnmaService: DnmaService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }

    };


    this.dnmaService.findByYearAndUai().subscribe(
      (response: any) => {
        this.dataset = response.results;
        console.log(this.dataset);
      }, error => {
        console.log(error);

      }
    );

  }




}
