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

    messages = [
    {m: 'First View Message', id: 1},
    {m: 'Second View Message', id: 2},
    {m: 'Third View Message', id: 3},
    {m: 'Fourth View Message', id: 4},
    {m: 'Fifth View Message', id: 5}
  ]

  constructor() { 
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

  changeFirstChildView() {
    let oldMessage = this.firstPitChildView.message.m;
    let newMessage = 'much love to view from parent';
    this.firstPitChildView.message.m = 'Messaged changed from ' + oldMessage +' to ' + newMessage;
  }

  changeChildrenViews() {
    this.pitChildrenViews.toArray().forEach((child) => {
      child.message.m = "Changed message for all views!"
    });
  }

  changeFirstChildContent() {
    let oldMessage = this.firstPitChildContent.message.m;
    let newMessage = 'much love to content from parent';
    this.firstPitChildContent.message.m = 'Messaged changed from ' + oldMessage +' to ' + newMessage;
  }

  changeChildrenContents() {
    this.pitChildrenContents.toArray().forEach((child) => {
      child.message.m = "Changed message for all content!"
    });
  }

  setForViewIndex(viewIndex) {
    let flag = true;
    this.pitChildrenViews.toArray().forEach((childView) => {
      if(childView.message.id == viewIndex) {
        childView.message.m = "This Child View's message has been modified!";
        flag = false;
      }
    });
    if(flag) {
      console.log('No view found with id for ' + viewIndex);
    }
  }

  setForContentIndex(contentIndex) {
    let flag = true;
    this.pitChildrenContents.toArray().forEach((childContent) => {
      if(childContent.message.id == contentIndex) {
        childContent.message.m = "This Child Content's message has been modified!";
        flag = false;
      }
    });
    if(flag) {
      console.log('No content found with id for ' + contentIndex);
    }
  }
}
