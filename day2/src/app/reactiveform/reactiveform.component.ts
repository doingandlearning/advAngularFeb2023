import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class Product {
  constructor(
    public description?: string,
    public category?: string,
    public lowPrice?: number,
    public highPrice?: number
  ) {}
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  productForm: FormGroup;

  constructor() {
    // FormControl
    // FormGroup
    // FormBuilder
    this.productForm = new FormGroup({
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      pricePolicy: new FormGroup({
        lowPrice: new FormControl(0, Validators.min(0)),
        highPrice: new FormControl(1000, Validators.min(10)),
      }),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
