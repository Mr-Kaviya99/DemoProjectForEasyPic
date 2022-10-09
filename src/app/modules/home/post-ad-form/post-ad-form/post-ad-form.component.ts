import {Component, OnInit} from '@angular/core';
import {DynamicFormFieldModel} from "./dynamic-form-field-model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-ad-form',
  templateUrl: './post-ad-form.component.html',
  styleUrls: ['./post-ad-form.component.scss']
})
export class PostAdFormComponent implements OnInit {

  myForm !: FormGroup

  dynamicFormFieldModel !: DynamicFormFieldModel[]
  // @ts-ignore
  categoryCode: string | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          console.log(params['category']);
          this.categoryCode = params['category'];
          console.log('category Code : ' + this.categoryCode);
        }
      );
    this.myForm = this.fb.group({})

    this.dynamicFormFieldModel = [
      {
        id: 'condition',
        label: 'Condition',
        type: 'radio',
        values: {
          'new': "New",
          'used': "Used"
        }
      },
      {
        id: 'brand',
        label: 'Brand',
        type: 'select',
        values: {
          'oppo': "Oppo",
          'samsung': "Samsung",
          'vivo': "Vivo"
        }

      },
      {
        id: 'model',
        label: 'Model',
        type: 'select',
        values: {
          'oppo': "Oppo",
          'samsung': "Samsung",
          'vivo': "Vivo"
        }
      },
      {
        id: 'edition',
        label: 'Edition',
        type: 'text',
      },
      // {
      //   id: 'features',
      //   label: 'Features',
      //   type: 'checkbox',
      //   values: {
      //     'oppo': "Oppo",
      //     'samsung': "Samsung",
      //     'vivo': "Vivo"
      //   }
      // },
    ]
    this.dynamicFormFieldModel.forEach(formItem => {
      this.myForm.addControl(formItem.id, this.fb.control([]))
    })

    console.log(this.myForm.value.condition)
  }
}
