export class RepoModel {
    index: number;
    name: string;
    description: string;
    watchers: number;
    forks: number;
    commits: any[];
    constructor() {
        this.commits = [];
    }
}
