import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {

  fullName: string = 'Omowale Obagunwa';
  displayedName: string = '';

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    let index: number = 0;

    const interval = setInterval(() => {

      this.displayedName = this.fullName.substring(0, index + 1);

      this.changeDetector.detectChanges();

      index++;

      if (index === this.fullName.length) {
        clearInterval(interval);
      }

    }, 150);
  }
}