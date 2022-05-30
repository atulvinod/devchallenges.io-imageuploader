import { finalize } from 'rxjs/operators';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImage implements OnInit {
  @Input() fileToUpload?: FileList;
  @Output() uploadedImageUrl = new EventEmitter<string>();

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
      this.uploadFile();
  }

  uploadFile() {
      if(this.fileToUpload != null){
          const file = this.fileToUpload[0]
          const filePath = `files-${file.name}`;
          const fileRef = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);
        task.snapshotChanges().pipe(
            finalize(() => fileRef.getDownloadURL().subscribe(e=>{
                this.uploadedImageUrl.emit(e);
            }))
         )
        .subscribe()
      }
  }
}
