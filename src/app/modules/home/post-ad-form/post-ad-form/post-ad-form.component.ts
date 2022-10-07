import {Component, OnInit} from '@angular/core';
import {DynamicFormFieldModel} from "./dynamic-form-field-model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-ad-form',
  templateUrl: './post-ad-form.component.html',
  styleUrls: ['./post-ad-form.component.scss']
})
export class PostAdFormComponent implements OnInit {

  myForm !: FormGroup

  dynamicFormFieldModel !: DynamicFormFieldModel[]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.myForm = this.fb.group({})

    this.dynamicFormFieldModel = [
      {
        id: 'dynamicRadio',
        label: 'Condition',
        type: 'radio'
      },
      {
        id: 'dynamicSelect',
        label: 'Brand',
        type: 'select'
      },
      // {
      //   id: 'dynamicSelect2',
      //   label: 'Model',
      //   type: 'select'
      // },
      // {
      //   id: 'dynamicText',
      //   label: 'Edition',
      //   type: 'text'
      // },
    ]

    this.dynamicFormFieldModel.forEach(formItem => {
      this.myForm.addControl(formItem.id, this.fb.control([]))
    })

  }
}
