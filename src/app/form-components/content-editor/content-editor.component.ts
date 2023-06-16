import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent {
  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    [
      "underline",
      "strike"
    ],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ "heading": ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  html = '';
  @Input() item: any;
  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();

  ngOnInit(): void {
    this.editor = new Editor();
    if(this.item.properties){
     this.html = this.item.properties.content;
    }
  }

  edit() {
    this.editClick.emit(this.item);
  }

  close() {
    this.closeClick.emit(this.item);
  }
  updateContent() {
    if(!this.item.properties){
      this.item['properties'] = {
        content : ''
      }
    }
    this.item['properties']['content'] = this.html;
  }
}
