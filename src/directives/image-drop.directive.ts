import { Directive, HostBinding, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appImageDrop]'
})
export class ImageDropDirective {

  @HostBinding('class.dragover-animation') animateContainer: boolean = false;

  @Output() fileDropped = new EventEmitter<FileList | never[]>(); 

  @HostListener('drop',['$event']) onDrop(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files ?? [];
    if(files.length > 0)
      this.fileDropped.emit(files)
  }

  @HostListener('dragover',['$event']) onDragOver(event:DragEvent){
    event.preventDefault();
    event.stopPropagation()
    this.animateContainer = true;
  }

  @HostListener("dragleave",['$event']) onDragLeave(event:DragEvent){
    event.preventDefault();
    event.stopPropagation()
    this.animateContainer = false;
  }

  constructor() { }

}