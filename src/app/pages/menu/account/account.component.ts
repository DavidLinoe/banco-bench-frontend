import { Component } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { PixService } from './../../../services/pix.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
constructor(
  public userService: UserService,
   public pixService: PixService
   ){}






}
