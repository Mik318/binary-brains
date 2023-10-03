import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Binary Brains';

  constructor(private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('Binary Brains');
    this.metaService.updateTag({ name: 'logo', content: 'src/assets/images/logo.svg' }); // Ajusta la ruta al favicon
  }

}
