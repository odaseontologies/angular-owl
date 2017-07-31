import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-text',
  template: `<md-input-container  *ngIf="form && form?.controls[predicate] && subject" class="example-full-width">
    <input mdInput [placeholder]="question"
    [formControl]="form?.controls[predicate]"
    [(ngModel)]="subject[predicate]">
    <md-error *ngIf="form?.controls[predicate].hasError('pattern')">
        Please enter a valid item
    </md-error>
    <md-error *ngIf="form?.controls[predicate].hasError('required')">
        {{ question }} is <strong>required</strong>
    </md-error>
</md-input-container>`,
  styleUrls: []
})
export class AngularOwlInputTextComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";

  ngOnInit() {
  }

}
