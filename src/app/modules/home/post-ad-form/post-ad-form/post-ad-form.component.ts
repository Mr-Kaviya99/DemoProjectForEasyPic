import {Component, OnInit} from '@angular/core';
import {DynamicFormFieldModel} from "../../../share/dynamic-form-field-model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../../../share/service/form.service";
import {CommonSnackBarService} from "../../../share/service/core/common-snack-bar-service.service";
import {HttpClient} from "@angular/common/http";

// import * as data from './data.json';

@Component({
  selector: 'app-post-ad-form',
  templateUrl: './post-ad-form.component.html',
  styleUrls: ['./post-ad-form.component.scss']
})
export class PostAdFormComponent implements OnInit {

  myForm !: FormGroup

  dynamicFormFieldModel !: DynamicFormFieldModel[]
  // @ts-ignore
  categoryCode: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormService,
    private commonSnackBarService: CommonSnackBarService,
    private http: HttpClient
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
    this.loadForm()

    this.myForm = this.fb.group({})
    if (this.categoryCode == "1") {
      this.dynamicFormFieldModel = [
        {
          id: 'condition',
          label: 'Condition',
          type: 'radio',
          valuess: {
            'new': "New",
            'used': "Used"
          }
        },
        {
          id: 'brand',
          label: 'Brand',
          type: 'select',
          valuess: {
            'oppo': "Oppo",
            'samsung': "Samsung",
            'vivo': "Vivo"
          }
        },
        {
          id: 'model',
          label: 'Model',
          type: 'text'
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
        //   valuess: {
        //     'oppo': "Oppo",
        //     'samsung': "Samsung",
        //     'vivo': "Vivo"
        //   }
        // },
      ]
    }else if (this.categoryCode == "6"){
      this.dynamicFormFieldModel = [
        {
          id: 'condition',
          label: 'Condition',
          type: 'radio',
          valuess: {
            'new': "New",
            'reconditioned': "Reconditioned",
            'used': "Used"
          }
        },
        {
          id: 'brand',
          label: 'Brand',
          type: 'select',
          valuess: {
            'toyota': "Toyota",
            'nissan': "Nissan",
            'ford': "Ford"
          }
        },
        {
          id: 'model',
          label: 'Model',
          type: 'text'
        },
        {
          id: 'edition',
          label: 'Edition',
          type: 'text',
        }, {
          id: 'yom',
          label: 'Year of Manufacture',
          type: 'text',
        },{
          id: 'mileage',
          label: 'Mileage (km)',
          type: 'text',
        },
        // {
        //   id: 'features',
        //   label: 'Features',
        //   type: 'checkbox',
        //   valuess: {
        //     'oppo': "Oppo",
        //     'samsung': "Samsung",
        //     'vivo': "Vivo"
        //   }
        // },
      ]
    }



    this.dynamicFormFieldModel.forEach(formItem => {
      this.myForm.addControl(formItem.id, this.fb.control(""))
    })
  }


  submitData() {
    console.log(this.myForm)

    this.formService.newAdDetails(
      this.categoryCode,
      this.myForm
    ).subscribe(response => {
      console.log(response)
      if (response.code === 201) {
        this.openSnackBar(response.message, 'close');
      } else {
        this.openSnackBar('Something went wrong try again!', 'close');
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarService.trigger(message, action, [
      10000, 'success-snack-bar-common',
      'end',
      'top'
    ]);
  }

  private loadForm() {

    // this.formService.getFormJSON(this.categoryCode).subscribe(response => {
    //   console.log(response)
    //   // this.dynamicFormFieldModel = response.data
    // }, error => {
    //   console.log(error);
    //   // @ts-ignore
    //   this.openSnackBar('please try again!');
    // })
  }
}
