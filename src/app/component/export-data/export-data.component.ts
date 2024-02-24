import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DnmaService} from "../../service/dnma.service";

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit {
  formulaire!: FormGroup;
  listOfFiles!: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dnmaService: DnmaService
  ) {
    this.formulaire = this.fb.group({
      choix: ['']
    });
  }


  ngOnInit(): void {

    this.dnmaService.exportToFiles().subscribe(
      (response:any) => {
        this.listOfFiles = response.links;
        if (this.listOfFiles.length > 0) {
          this.listOfFiles.shift();
        }
        console.log(this.listOfFiles);
      }, (error:any) => {
        console.log(error.message);
      }
    )

  }


  submitForm() {
    console.log(this.formulaire.value);
    const choix = this.formulaire.get('choix')?.value;
    const selectedLink = this.listOfFiles.find((link: any) => link.rel === choix);
    console.log("selectedLink", selectedLink);
    window.open(selectedLink.href, '_blank');
  }


}
