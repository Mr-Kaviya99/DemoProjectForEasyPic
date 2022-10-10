import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getFormJSON(categoryCode: string) {
    // console.log(categoryCode)
    // return this.http.get<any>(this.baseUrl + 'product/main/visco/get-brand?searchText=' + categoryCode, {
    //   headers: {Progress_Type: 'BAR'}
    // });
  }

  newAdDetails(categoryCode: string, myForm: FormGroup) {
    console.log(myForm)
    console.log(myForm.value)
    return this.http.post<any>('',{});
  }
}
