import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  UploadForms!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngonInit() {
    this.UploadForms = this.fb.group({
      Form11: ['', [Validators.required]],
      Form16: ['', [Validators.required]],
      Pay: ['', [Validators.required]],
      letter: ['', [Validators.required]],
      employement:['',[Validators.required]]
    })
  }
  get Form11() {
    return this.UploadForms.get('Form11');
  }
  get Form16() {
    return this.UploadForms.get("Form16");
  }

  get Pay() {
    return this.UploadForms.get('Pay');
  }
  get letter() {
    return this.UploadForms.get('letter');
  }

  get employement() {
    return this.UploadForms.get('employement');
  }
  onSubmit() {

  }
}
