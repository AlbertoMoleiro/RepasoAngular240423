import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  getHelloWorld() {
    return "Hello World!";
  }
}
