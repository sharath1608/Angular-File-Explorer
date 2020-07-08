import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      Email: ["", Validators.compose([Validators.required, Validators.email])]
    });
    this.form.valueChanges.subscribe(data =>
      console.log(this.form.get("Email"))
    );
  }
  getValue(string) {
    console.log();
    return JSON.stringify(string.error);
  }
}
