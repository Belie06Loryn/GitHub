import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
  // usere: User;
  // constructor(private http:HttpClient) { 
  //   this.usere = new User("","","","","","",0);
}

// githRequest(){
//   interface Apiuserz{
//     avatar_url:string;
//       name:string;
//       bio:string;
//       html_url:string;
//       email:string;
//       location:string;
//       public_repos:number;
//   }
//   let promise = new Promise((resolve,reject)=>{
//     this.http.get<Apiuserz>(environment.apiUrl).toPromise().then(userz=>{
//       this.usere.avatar_url = userz.avatar_url
//       this.usere.name = userz.name
//       this.usere.bio = userz.bio
//       this.usere.html_url = userz.html_url
//       this.usere.email = userz.email
//       this.usere.location = userz.location
//       this.usere.public_repos = userz.public_repos


// resolve()
// },
// error=>{
//   this.usere.name = "Invalid"

//   reject(error)
// })
// })
// return promise
//  }
//}
