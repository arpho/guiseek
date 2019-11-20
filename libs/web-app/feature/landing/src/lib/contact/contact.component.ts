import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SeoService } from '@guiseek/shared';

@Component({
  selector: 'guiseek-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    message: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.generateTags({
      tags: { title: 'Contato' }
    })
  }

}
