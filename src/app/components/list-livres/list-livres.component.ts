import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  public livres: Livre[] = [];
  constructor(private livresService: LivreService) { }
  ngOnInit(): void {
    this.livres = this.livresService.getLivres();
  }


}
