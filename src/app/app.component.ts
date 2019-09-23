import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubComponent } from './github/github.component';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'takehome';
  constructor(private _httpService: HttpClient) { }
}
