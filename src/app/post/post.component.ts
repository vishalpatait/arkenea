import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  appointForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.appointForm = this.fb.group({
      name: ["", Validators.compose([Validators.required])],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ])
      ],
      message: ["", Validators.compose([Validators.required])]
    });
  }
  get f() {
    return this.appointForm.controls;
  }
  addUser() {
    this.us.create(this.appointForm.value).subscribe(
      response => {
        console.log("ressss", response);
        alert("Thanks for your interest. We will revert you in 24 hours..!");
      },
      err => {
        if (err.status == 200) {
          alert("user added ");
        } else {
          console.log(err);
          alert("user not added");
        }
      }
    );
  }
}
