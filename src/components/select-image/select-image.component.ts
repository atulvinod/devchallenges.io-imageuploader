import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss'],
})
export class SelectImageComponent implements OnInit {
  @Output() imageSelected = new EventEmitter<FileList>();

  constructor() {}

  ngOnInit(): void {}

  uploadFile(file: FileList | Event | never[]) {
    if (file instanceof Event) {
      this.imageSelected.emit(
        (file.target as HTMLInputElement).files as FileList
      );
    } else {
      this.imageSelected.emit(file as FileList);
    }
  }
}
