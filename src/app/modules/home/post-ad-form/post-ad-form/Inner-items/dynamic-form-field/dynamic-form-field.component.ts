import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormFieldModel} from "../../dynamic-form-field-model";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() formItem!: DynamicFormFieldModel
  form!: FormGroup

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control
  }

  ngOnInit(): void {
  }

}
