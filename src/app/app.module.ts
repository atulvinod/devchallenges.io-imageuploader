import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ImageUploadComponent,
  SelectImageComponent,
  UploadImage,
  ProgressBar,
  UploadedImageResultComponent,
} from 'src/components';
import { ImageDropDirective } from 'src/directives';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    SelectImageComponent,
    ImageDropDirective,
    UploadImage,
    ProgressBar,
    UploadedImageResultComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: BUCKET,
      useValue: 'gs://upload-image-7c507.appspot.com',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
