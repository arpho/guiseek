import { Component, OnInit } from '@angular/core';
import { GithubService, NpmSearch, NpmService, Result } from '@guiseek/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'guiseek-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  npm$: Observable<Result[]>
  github$: Observable<any>
  constructor(
    private githubService: GithubService,
    private npmService: NpmService
  ) { }

  ngOnInit() {
    this.npm$ = this.npmService.byAuthor()
      .pipe(
        map(({ results }: NpmSearch) => {
          return results.sort((a, b) => a.searchScore - b.searchScore).slice(0, 6)
        })
      )
    // .subscribe(console.log)
    this.github$ = this.githubService.repos()
      .pipe(
        map((repos: any[]) => {
          return repos
            .map(({ updated_at, ...r }) => ({ updated_at: new Date(updated_at), ...r }))
            .sort((a, b) => b.updated_at - a.updated_at)
        })
      )
    // .subscribe(console.log)
  }

}
