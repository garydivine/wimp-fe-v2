import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-movie-actor-form',
  templateUrl: './movie-actor-form.component.html',
  styleUrls: ['./movie-actor-form.component.css'],
  animations: [fadeInAnimation]
})

export class MovieActorFormComponent implements OnInit {

  movieActorForm: NgForm;
  @ViewChild('movieActorForm')
  currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  movieId: number;
  actorId: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['movieId']) ? this.movieId = +params['movieId'] : null;
      });
  }

  saveActorToMovie(movieActorForm: NgForm){
    this.actorId  = movieActorForm.value.actorId
      this.dataService.addRecord("movies/"+this.movieId+"/actors", {"id" : this.actorId})
          .subscribe(
            result => this.successMessage = "Record added successfully",
            error => this.errorMessage = <any>error
          );

            this.movieActorForm.form.markAsPristine();

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.movieActorForm = this.currentForm;
    this.movieActorForm.valueChanges
      .subscribe(
        data => this.onValueChanged()
      );
  }

  onValueChanged() {
    let form = this.movieActorForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {};

  validationMessages = {};


}


