import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { RepoModel } from '../models/repo.model';

@Component({
    selector: 'github',
    templateUrl: 'github.component.html',
    styleUrls: ['./github.component.scss']
})
export class GithubComponent{
    user:any;
    repos: any;
    newRepository: RepoModel[] = [];
    orderedRepo: RepoModel[] = [];
    orgName: string;
    constructor(private _githubService: GithubService) {
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
            this.reOrganizeRepo();
        });
    }
    
    reOrganizeRepo():void {
        this.newRepository = [];
        for(let i: number =0; i < this.repos.length; i++) {
            let currentRepo = this.repos[i];
            this.newRepository.push({index: i, name: currentRepo.name, description: currentRepo.description, watchers: currentRepo.watchers, forks: currentRepo.forks, commits: []});
        };
        this.sortBy('forks');
    }

    getCommits(id: number, name: string):void {
        this._githubService.getCommits(name).subscribe(commit => {
            let itemIndex = this.orderedRepo.findIndex(item => item.index === id);
            this.orderedRepo[itemIndex].commits.push(commit);
        });
    }

    clearCommits(id: number): void {
        let itemIndex = this.orderedRepo.findIndex(item => item.index === id);
        this.orderedRepo[itemIndex].commits = [];
    }

    sortBy(field: string):void {
        this.newRepository.sort((a: any, b: any) => {
            if (a[field] > b[field]) {
                return -1;
            } else if (a[field] < field[field]) {
                return 1;
            } else {
                return 0;
            }
        });
        this.orderedRepo = this.newRepository;
    }

    search():void {
        this._githubService.updateOrganization(this.orgName);

        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
            this.reOrganizeRepo();
        });
    }
}