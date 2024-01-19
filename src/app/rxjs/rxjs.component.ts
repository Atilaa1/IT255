import { Component } from '@angular/core';
import { Flajts } from '../model/flajts';
import { FlajService } from '../service/flaj.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {
  flajts:Flajts[];
  constructor(private flajService:FlajService){}

  ngOnInit():void{
    this.getFlajts();
  }

  getFlajts():void{
    this.flajService.getFlajts().subscribe(flajts=>this.flajts=flajts);

  }
}
