import { Component, computed, effect, OnInit, Signal, signal, WritableSignal, input, numberAttribute, booleanAttribute } from '@angular/core';
import { Favourite, FavouriteComponent } from '../favourite/favourite.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FavouriteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  favourite: Favourite = {
    isFavourite: true,
    username: 'Denis'
  }
  firstname: WritableSignal<string> = signal('Denis');
  capitalized: Signal<string> = computed(() => this.firstname().toUpperCase())
  setValue = 40;

  constructor() {
    effect(() => {
      console.log(`firstname has changed to `)
    })
  }
  ngOnInit(): void {
     this.firstname.set('Murimi')

    // this.firstname.update(name => name.toUpperCase())

    //console.log(`New value of input is ${this.value}`)

    //console.log(this.capitalized() )
  }

  show(name: string) {
    console.log('Something happened', name);
  }

}
