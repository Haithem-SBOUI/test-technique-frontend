import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DnmaService {
  private baseUrl = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-dnma-par-uai-appareils';
  constructor(private http: HttpClient) { }
  findMostVisitedWeek() {
    // return this.http.get<VehicleDetails>(this.baseUrl);
    return this.http.get(`${this.baseUrl}/records?select=debutsemaine%2C%20%20%20uai%2C%20%20SUM(IFNULL(visites_ordinateur%2C%200)%20%2B%20IFNULL(visites_smartphone%2C%200)%20%2B%20IFNULL(visites_tablette%2C%200))%20AS%20total_visits&group_by=debutsemaine%2C%20uai&order_by=%20%20total_visits%20DESC%20&limit=3&refine=uai%3A%220010024W%22`);
  }
  findByYearAndUai() {
    let uai = "0010024W";
    let year = "2022"
    // return this.http.get(`${this.baseUrl}/records?order_by=debutsemaine&limit=100&refine=uai%3A%22${uai}%22&refine=debutsemaine%3A"${year}"`);
    return this.http.get(`${this.baseUrl}/records?select=SUM(visites_ordinateur)%20as%20total_visits_ordinateur%2C%20%20%20%20%20SUM(utilisateurs_ordinateur)%20as%20total_utilisateurs_ordinateur%2C%20%20%20%20%20SUM(visites_smartphone)%20as%20total_visites_smartphone%2C%20%20%20%20%20SUM(utilisateurs_smartphone)%20as%20total_utilisateurs_smartphone%2C%20%20%20%20%20SUM(visites_tablette)%20as%20total_visites_tablette%2C%20%20%20%20%20SUM(utilisateurs_tablette)%20as%20total_utilisateurs_tablette%2CSUM(visites_autreappareil)%20as%20total_visites_autreappareil%2C%20%20%20%20%20SUM(utilisateurs_autreappareil)%20as%20total_utilisateurs_autreappareil%2C%20%20%20%20%20SUM(visites_android)%20as%20total_visites_android%2C%20%20%20%20%20SUM(utilisateurs_android)%20as%20total_utilisateurs_android%2C%20%20%20%20%20SUM(visites_windows)%20as%20total_visites_windows%2C%20%20%20%20%20SUM(utilisateurs_windows)%20as%20total_utilisateurs_windows%2C%20%20%20%20%20SUM(visites_ios)%20as%20total_visites_ios%2C%20%20%20%20%20SUM(utilisateurs_ios)%20as%20total_utilisateurs_ios%2C%20%20%20%20%20SUM(visites_macos)%20as%20total_visites_macos%2C%20%20%20%20%20SUM(utilisateurs_macos)%20as%20total_utilisateurs_macos%2C%20%20%20%20%20SUM(visites_chromeos)%20as%20total_visites_chromeos%2C%20%20%20%20%20SUM(utilisateurs_chromeos)%20as%20total_utilisateurs_chromeos%2C%20%20%20%20%20SUM(visites_linux)%20as%20total_visites_linux%2C%20%20%20%20%20SUM(utilisateurs_linux)%20as%20total_utilisateurs_linux%2C%20%20%20%20%20SUM(visites_autreos)%20as%20total_visites_autreos%2C%20%20%20%20%20SUM(utilisateurs_autreos)%20as%20total_utilisateurs_autreos%2C%20%20%20%20%20SUM(visites_chromemobile)%20as%20total_visites_chromemobile%2C%20%20%20%20%20SUM(utilisateurs_chromemobile)%20as%20total_utilisateurs_chromemobile%2C%20%20%20%20%20SUM(visites_safari)%20as%20total_visites_safari%2C%20%20%20%20%20SUM(utilisateurs_safari)%20as%20total_utilisateurs_safari%2C%20%20%20%20%20SUM(visites_chrome)%20as%20total_visites_chrome%2C%20%20%20%20%20SUM(utilisateurs_chrome)%20as%20total_utilisateurs_chrome%2C%20%20%20%20%20SUM(visites_firefox)%20as%20total_visites_firefox%2C%20%20%20%20%20SUM(utilisateurs_firefox)%20as%20total_utilisateurs_firefox%2C%20%20%20%20%20SUM(visites_edge)%20as%20total_visites_edge%2C%20%20%20%20%20SUM(utilisateurs_edge)%20as%20total_utilisateurs_edge%2C%20%20%20%20%20SUM(visites_samsungbrowser)%20as%20total_visites_samsungbrowser%2C%20%20%20%20%20SUM(utilisateurs_samsungbrowser)%20as%20total_utilisateurs_samsungbrowser%2C%20%20%20%20%20SUM(visites_opera)%20as%20total_visites_opera%2C%20%20%20%20%20SUM(utilisateurs_opera)%20as%20total_utilisateurs_opera%2C%20%20%20%20%20SUM(visites_huaweibrowser)%20as%20total_visites_huaweibrowser%2C%20%20%20%20%20SUM(utilisateurs_huaweibrowser)%20as%20total_utilisateurs_huaweibrowser%2C%20%20%20%20%20SUM(visites_miuibrowser)%20as%20total_visites_miuibrowser%2C%20%20%20%20%20SUM(utilisateurs_miuibrowser)%20as%20total_utilisateurs_miuibrowser%2C%20%20%20%20%20SUM(visites_autrenavigateur)%20as%20total_visites_autrenavigateur%2C%20%20%20%20%20SUM(utilisateurs_autrenavigateur)%20as%20total_utilisateurs_autrenavigateur&group_by=year(debutsemaine)&order_by=year(debutsemaine)&limit=100&refine=uai%3A%22${uai}%22`);
  }
  findByMonth() {
    // return this.http.get<VehicleDetails>(this.baseUrl);
    return this.http.get(`${this.baseUrl}`);
  }
}
