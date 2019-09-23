import { Component, Input } from '@angular/core';

@Component({
    selector: 'view-repository',
    templateUrl: './view-repository.component.html',
    styleUrls: ['./view-repository.component.scss']
})

export class ViewRepositoryComponent {
    @Input() repositoryName: string;
    constructor() {}
}