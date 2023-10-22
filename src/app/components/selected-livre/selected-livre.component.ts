import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css']
})
export class SelectedLivreComponent implements OnInit {

  public livre !: Livre | undefined;
  constructor(private livresService: LivreService, private activatedroute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['identif'];
    this.livre = this.livresService.getLivreById(id);
  }
  onListedLivres() {
    this.router.navigate(['/livres']);
  }
}



