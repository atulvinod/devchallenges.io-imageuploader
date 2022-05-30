import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uploaded-image-result',
  templateUrl: './uploaded-image-result.component.html',
  styleUrls: ['./uploaded-image-result.component.scss'],
})
export class UploadedImageResultComponent implements OnInit {
  @Input() imageUrl?: string;

  ngOnInit(): void {}

  copyToClipboard() {
    navigator.clipboard
      .writeText(this.imageUrl ?? '')
      .then(() => {
        alert('URL copied');
      })
      .catch(() => {
        alert('Unable to copy link to clipboard');
      });
  }
}
