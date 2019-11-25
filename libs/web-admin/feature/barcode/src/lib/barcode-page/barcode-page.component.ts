import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'guiseek-barcode-page',
  templateUrl: './barcode-page.component.html',
  styleUrls: ['./barcode-page.component.scss']
})
export class BarcodePageComponent implements OnInit {
  form: FormGroup
  submitted = false
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      code: []
    })
  }
  get code() {
    return this.form.get('code')
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true
  }
}
