import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <p>By {{name}}</p>
    `
})
export class AppComponent { 
    pageTitle: string = 'Angular2: Getting Started ';
    name: string = 'Damien Shaw';
}
