import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { github } from '../utils/github.utils';

@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }
  repos() {
    return this.http.get(
      github.repositories()
    )
  }
}
