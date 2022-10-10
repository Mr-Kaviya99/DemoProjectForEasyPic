import {ValidatorFn} from "@angular/forms";

export interface DynamicFormFieldModel {
  id: string
  label: string
  type: 'text' | 'select' | 'radio' | 'checkbox'
  valuess?: { [key: string]: string }
  // validators?: ValidatorFn[]
}
