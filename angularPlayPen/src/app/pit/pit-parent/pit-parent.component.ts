import { AfterViewInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PitChildComponent } from '../pit-child/pit-child.component';

@Component({
  selector: 'app-pit-parent',
  templateUrl: './pit-parent.component.html',
  styleUrls: ['./pit-parent.component.css']
})
export class PitParentComponent implements OnInit, AfterViewInit {

  @ViewChild(PitChildComponent) firstPitChildView: PitChildComponent;
  @ViewChildren(PitChildComponent) pitChildrenViews: QueryList<PitChildComponent>;

  @ContentChild(PitChildComponent) firstPitChildContent: PitChildComponent;
  @ContentChildren(PitChildComponent) pitChildrenContents: QueryList<PitChildComponent>;

  @ContentChild('special') loneWolfChildContent: PitChildComponent;

    messages:string[] = [
    'First View Message',
    'Second View Message',
    'Third View Message',
    'Fourth View Message',
    'Fifth View Message'
  ]

  constructor() { 
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

  changeFirstChildView() {
    let oldMessage = this.firstPitChildView.message;
    let newMessage = 'much love to view from parent';
    this.firstPitChildView.message = 'Messaged changed from ' + oldMessage +' to ' + newMessage;
  }

  changeChildrenViews() {
    this.pitChildrenViews.toArray().forEach((child) => {
      child.message = "Changed message for all views!"
    });
  }

  changeFirstChildContent() {
    let oldMessage = this.firstPitChildContent.message;
    let newMessage = 'much love to content from parent';
    this.firstPitChildContent.message = 'Messaged changed from ' + oldMessage +' to ' + newMessage;
  }

  changeChildrenContents() {
    let message = this.loneWolfChildContent.message;
    this.pitChildrenContents.toArray().forEach((child) => {
      child.message = "Changed message for all content!"
    });
    this.loneWolfChildContent.message = message;
  }

}
