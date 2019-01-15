import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "fersS"
  titulo = ''
  type = "password"
  msj:string = ''
  form = any {}
  // show = false
  fecha = Date.now()
  learners = [
    {
      name: "fer",
      age: 23
    },
    {
      name: "beth",
      age: 30
    },
    {
      name: "maite",
      age: 36
    },
    {
      name: "lili",
      age: 26
    }
  ]

  onKeyDown (value) {
    this.titulo = value
  }

  togglePass (value, pass) {
    // this.type = value ? "text" : "password"
    pass.type = value ? "text" : "password"
  }

  testing () {
    // console.log(this.form)
    if (this.form.password.length < 6){
      this.msj = 'tu password es muy pequeño'
      this.clase = "alert"
    } else {
      this.msj = 'bienvenido'
      this.clase = "success"
    }
  }

  ngOnInit() {
  }

}
