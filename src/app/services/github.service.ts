import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs';

@Injectable()
export class GithubService {
    private username='netflix';
    private client_id = 'c5a7fee10b81c312bd73';
    private client_secret = 'b45a93dd592e46baef11b6cb1e5d2803cb687a21';
    constructor(private _httpService: HttpClient) {
    }

    getUser(){
        return this._httpService.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }
    getRepos(){
        return this._httpService.get('https://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }
    updateOrganization(name: string) {
        this.username = name;
    }
    getCommits(repoName: string) {
        return this._httpService.get('https://api.github.com/repos/'+this.username+'/'+repoName+'/commits'+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }
}