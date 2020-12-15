import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  isBookNowDisabled = false;

  constructor(private authService: AuthService) { }

  

  
}
