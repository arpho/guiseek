import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user$: Observable<User>
  constructor(
    private afa: AngularFireAuth
  ) {
    this.user$ = this.afa.authState.pipe(
      map((user) => !!user ? user : null)
    )
    // .pipe(
    //   switchMap(user => user ?
    //  this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)),
    //   tap(user => AuthService.User = user)
    // )
  }
  login({ email, password }) {
    return this.afa.auth.signInWithEmailAndPassword(email, password)
  }
}
