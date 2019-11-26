import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { npm } from '../utils';

@Injectable()
export class NpmService {

  constructor(
    private http: HttpClient
  ) { }
  byAuthor(author = 'guiseek') {
    return this.http.get(
      npm.byAuthor(author)
    )
  }
}
