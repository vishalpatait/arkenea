import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "./user";
import { Observable } from "rxjs";
const { serverURL, api } = environment;
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public create(user) {
    return this.http.post<User>(`${serverURL}${api.createUser}`, user);
  }
}
