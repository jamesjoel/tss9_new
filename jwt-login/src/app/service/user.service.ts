import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http : HttpClient,
    private _authService : AuthService
  ) { }

  getUserData(){
    return this._http.get<any>("http://localhost:3000/api/user/getuser", 
      { headers: { Authorization : this._authService.getToken()}
    });
  }
  fileUpload(file:File){
    var formData = new FormData();
    formData.append("myfile", file);
    return this._http.post<any>("http://localhost:3000/api/fileupload",
    formData,
      { headers: { Authorization: this._authService.getToken() }}
    )
  }

  

}
