import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import SwiperCore, { Navigation} from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent {

candidateList: any[] = [
  {
    'name':'Aniket Joshi',
    'designation':'Director',
    'company':'Piramal Enterprises',
    'city':'Mumbai',
    'leads':7,
    'captured':3,
    'comments':'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teamelatea aliquet vulputate. Egestas. Lacinia ultrices QuisqueQuisqueQuisqueQuklloojjdjuee',
    'value':'../../../assets/images/unselected.png',
    'hireStatus':'Undecided',
  },
  {
    'name':'Kunjan Kumar',
    'designation':'Director',
    'company':'HDFC',
    'city':'New Delhi',
    'leads':7,
    'captured':3,
    'comments':'No Comments',
    'value': '../../../assets/images/thumsupdown.png',
    'hireStatus':'No Hire',
  },
  {
    'name':'Kunal Kamra',
    'designation':'Director',
    'company':'Piramal Enterprises',
    'city':'Mumbai',
    'leads':7,
    'captured':3,
    'comments':'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame',
    'await':'cm-red',
    'value': '../../../assets/images/thumsupdown.png',
    'hireStatus':'No Hire',
  }
];

selected = "option1";
selected2 = "option1"

drop(event: CdkDragDrop<any[]>) {
  moveItemInArray(this.candidateList, event.previousIndex, event.currentIndex);
}
}
