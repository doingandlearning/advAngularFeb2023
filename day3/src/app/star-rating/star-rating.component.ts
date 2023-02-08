import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor {
  stars: boolean[] = Array(5).fill(false);
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  rate(rating: number) {
    // [].map((currentEl, currentIdx, wholeArray) =>  )
    // [].reduce()
    // [].filter()
    this.stars = this.stars.map((_, index) => rating > index);
  }
  // this.stars = [true, true, false, false, false]
  get value(): number {
    return this.stars.reduce((total: number, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }
  onChange = (rating: number) => {
    this.rate(rating);
  };

  onTouched = () => {};

  // Update the rating
  writeValue(rating: number): void {
    this.stars = this.stars.map((_, index) => rating > index);
    this.onChange(rating);
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
