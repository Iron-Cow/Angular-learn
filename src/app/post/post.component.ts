import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // changing inputs (whole object change)

})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  // @Input("myPost") post: Post;
  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('constructor');
  }

  removePost(): void{
    this.onRemove.emit(this.post.id);
  }

   ngOnChanges(changes: SimpleChanges): void{
    console.log("OnChanges", changes);
  }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
