import { Component } from '@angular/core';
import axios, {AxiosError} from "axios";

interface CheckCodeResponse {
  id:number,
  access_token:string,
}

@Component({
  selector: 'app-contact',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent {
  async login(form:HTMLFormElement, event:Event){
    event.preventDefault();
    var formData = new FormData(form);
    let data:CheckCodeResponse;
    let email = formData.get("email")?.toString();
    let code = formData.get("code")?.toString();
  
    try{
      if(email == null || email == "") return;
      if(code == ""){
        await axios.get("http://localhost:5000/auth/get",{
          params:{
            email:email
          }
        }).catch((e:AxiosError)=>{
          console.error(e);
        })
      }else{
        data = (await axios.get("http://localhost:5000/auth/checkcode", {
          params:{
            email:email,
            code:code,
          }
        })).data;
  
        await window.localStorage.setItem("token", data.access_token);
        await window.localStorage.setItem("email", email);
        
  
  
      }
    }catch(error){
      console.error(error);
    }
  }
}
