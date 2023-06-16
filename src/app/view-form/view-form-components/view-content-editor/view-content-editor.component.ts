import { Component, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-view-content-editor',
  templateUrl: './view-content-editor.component.html',
  styleUrls: ['./view-content-editor.component.scss']
})
export class ViewContentEditorComponent {
  @Input() item: any;
  constructor(private sanitizer: DomSanitizer) {}
  renderedHtmlContent: SafeHtml = "";
  public sanitizeHtmlContent(htmlstring): SafeHtml {
    return this.sanitizer.sanitize(SecurityContext.HTML, htmlstring);
  }

  ngOnInit(){
    this.renderedHtmlContent = this.sanitizeHtmlContent(
      this.item.elementProperties.content
    );
  }
}
