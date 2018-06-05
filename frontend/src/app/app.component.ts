import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SupervisionApiService} from './supervision/supervision-api.service';
import {Image} from './supervision/image.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wasawski';
  // imageListSubs: Subscription;
  // imageList: Image;
  // constructor(private supervisionApi: SupervisionApiService) {
  // }
  //
  // ngOnInit() {
  //   // this.imageListSubs = this.examsApi
  //   //   .getExams()
  //   //   .subscribe(res => {
  //   //       this.examsList = res;
  //   //     },
  //   //     console.error
  //   //   );
  // }
  //
  // ngOnDestroy() {
  //   // this.examsListSubs.unsubscribe();
  // }
}
