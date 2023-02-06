import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input() headerTemplate: TemplateRef<any> | null = null;
  @Input() bodyTemplate: TemplateRef<any> | null = null;
  @Input() footerTemplate: TemplateRef<any> | null = null;
}
