import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {

  }

  ngOnInit() {

    // const docElm = document.documentElement;
    const docElm = this.elementRef.nativeElement
    const cardElm = docElm.querySelectorAll('svg')
    // const titleElm = document.querySelector('#title');

    const { clientWidth, clientHeight } = docElm;

    // Stream of all mousemove events
    const mouseMove$ = fromEvent(docElm, 'mousemove')
      .pipe(
        map((event: MouseEvent) => ({
          x: event.clientX, y: event.clientY
        }))
      );

    // Stream of all touchmove events
    const touchMove$ = fromEvent(docElm, 'touchmove')
      .pipe(
        map((event: TouchEvent) => ({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        }))
      )

    // Combination of mousemove and touchmove streams
    const move$ = merge(mouseMove$, touchMove$);

    // Apply values to styles
    move$.subscribe(pos => {
      const rotX = (pos.y / clientHeight * -50) + 25;
      const rotY = (pos.x / clientWidth * 50) - 25;

      console.log('pos: ', pos)
      cardElm.forEach((ce) => {
        ce.style.cssText = `
          transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
        `;
      })
      // cardElm.style.cssText = `
      //   transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
      // `;
    });
  }

}
