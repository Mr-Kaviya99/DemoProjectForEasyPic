import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormFieldModel} from "../../../../../share/dynamic-form-field-model";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() formItem!: DynamicFormFieldModel
  form!: FormGroup
  // values: { [p: string]: string } | undefined = [];
  checkboxArray: any[] = [];

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control
  }

  ngOnInit(): void {
    console.log(this.formItem.valuess)
  }

  pushCheckBoxValue(event: any, value: any) {
    // if (event === false){
    //   this.removeValue(value)
    // }else {
    //   this.checkboxArray.push(value.key);
    // }
    // console.log(this.checkboxArray)
  }
  removeValue(value: any) {
    // this.checkboxArray.splice(value.key,1);
  }
}
