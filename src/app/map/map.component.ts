import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import { mapOptions } from '../../constants';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: Map;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map(mapOptions);
    setTimeout(() => { this.map.updateSize(); });
  }

}
