import { Component, OnInit } from '@angular/core';

enum Steps {
  selectImage,
  uploadingImage,
  showImageUploadResult,
}

@Component({
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  selector: 'image-upload',
})
export class ImageUploadComponent implements OnInit {
  currentStep: Steps = Steps.selectImage;
  fileToUpload?: FileList;
  uploadedImageUrl?: string;
  validExtensions: string[] = ['png', 'jpeg'];
  ngOnInit(): void {}

  imageSelected(file: FileList) {
    if (!file) return;

    const fileExtension: string = file[0]?.name.split('.')?.pop() ?? '';
    if (!this.validExtensions.some((e, i, a) => e == fileExtension)) {
      alert(`Only ${this.validExtensions.reduce((acc,e)=>{ return acc+'.'+e+' '},'')} files are accepted` );
      return;
    }
    this.fileToUpload = file;
    this.currentStep = Steps.uploadingImage;
  }

  imageUploaded(url: string) {
    this.currentStep = Steps.showImageUploadResult;
    this.uploadedImageUrl = url;
  }
}
