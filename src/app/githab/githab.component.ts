import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { ServiceService } from '../githab-service/service.service'
import { HttpClient } from '@angular/common/http';
import { GitRequestService } from '../Git-http/git-request.service'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-githab',
  templateUrl: './githab.component.html',
  styleUrls: ['./githab.component.css']
})
export class GithabComponent implements OnInit {
  //users:User [];
  usere:User;
  amazina:string ="";
  userz: any;
  lexy: any;
  constructor(lexy:ServiceService,private http:HttpClient) { 
    // this.usere = userService.getGit()
  }

  ngOnInit() {
    // interface ApiResponse{
    //     avatar_url:string;
    //       name:string;
    //       bio:string;
    //       html_url:string;
    //       email:string;
    //       location:string;
    //       public_repos:number;
    //   }
    // this.usereService.githRequest()
    // this.usere = this.usereService.usere
  }  
    reba(){

    //   let promise = new Promise((resolve,reject)=>{
    //   this.http.get("https://api.github.com/users/" + this.amazina + "?access_token=35f64dcc7d7ad9650cca8b14735e1ce9addb23fe").toPromise().then(userz =>{
    //   this.userz = userz;
    //   console.log(this.userz);
    //  })  
        //       this.users.avatar_url = response.avatar_url
        //       this.users.name = response.name
        //       this.users.bio = response.bio
        //       this.users.html_url = response.html_url
        //       this.users.email = response.email
        //       this.users.location = response.location
        //       this.users.public_repos = response.public_repos
        
        
      //  resolve()
      // })
      // return promise
      this.lexy.ServiceService(this.amazina);
      this.usere=this.lexy.user;
      console.log(this.usere)
    }
    
  

}
