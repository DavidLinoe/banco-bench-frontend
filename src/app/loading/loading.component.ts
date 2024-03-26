import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  //! standalone: true,
  //! imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  // private _window: Window;

  // constructor(window: Window) {
  //   this._window = window;
  //   this.addLoadEvent();
  // }

  // private addLoadEvent(): void {
  //   this._window.addEventListener("load", () => {
  //     setTimeout(() => {
  //       const loadingScreen = document.getElementById("loadingScreen");
  //       if (loadingScreen) {
  //         loadingScreen.style.display = "none";
  //       }
  //     }, 5000);

  //     const content = document.getElementById("content");
  //     if (content) {
  //       content.style.display = "block";
  //     }
  //   });
  // }
}
