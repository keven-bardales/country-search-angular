import { Component, Input, ElementRef, ViewChild, Output, EventEmitter, OnInit,OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

/** DEBOUNCER */
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription

  ngOnInit(): void {
   this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe((val) => this.makeSearch() )
  }

  @Output()
  onNewSearch: EventEmitter<string> = new EventEmitter ()

  @ViewChild('txtSearchInput')
  tagInput!: ElementRef<HTMLInputElement>

  @Input()
  placeholder :string = ''

  @Input()
  initialValue: string = ''

  makeSearch() {
  const search = this.tagInput.nativeElement.value
  this.onNewSearch.emit(search)
  }

  onKeyPress(searched:string) {
    this.debouncer.next(searched)
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }


}
