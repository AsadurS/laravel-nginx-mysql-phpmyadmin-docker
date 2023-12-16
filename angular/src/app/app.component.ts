import { Component, inject } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {environment} from '../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  response :any;
  $http = inject(HttpClient)
  apiUrl = environment.appUrlApi
  ngOnInit(){
   this.$http.get(`${this.apiUrl}/test-route`).subscribe({
    next:(response:any)=>{
      this.response = response.data
      console.log(this.response.data)
    },error:(e)=> console.log(e)
   })
  }
}
