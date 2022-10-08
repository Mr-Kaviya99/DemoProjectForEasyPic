export interface DynamicFormFieldModel {
  id: string
  label: string
  type: 'text' | 'select' | 'radio' | 'checkbox'
  values?: {[key: string]: string}
}
