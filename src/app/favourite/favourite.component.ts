import { CommonModule } from '@angular/common';
import { Component, input, effect, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  favourite = input.required<Favourite>();
  buttonClicked = output<string>();

  toggle() {
    this.favourite().isFavourite = !this.favourite().isFavourite;
    this.buttonClicked.emit(this.favourite().username);

  }
}

export interface Favourite {
  isFavourite: boolean,
  username: string
}