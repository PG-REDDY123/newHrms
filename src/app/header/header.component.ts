import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  language = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" }
  ];
  notifications = [
    { name: "John", notific: "Hi How are you doing" },
    { name: "John", notific: "Hi How are you doing" },
  ];
  unreadCount: number = 0;
  ngOnInit() {
    // Simulate fetching notifications
    setTimeout(() => {
      this.unreadCount = 5; // Example new notifications
    }, 2000);
  }
  toggleNotifications() {
    console.log('Notifications clicked');
  }

  showlanguage() {

  }

  profile = [
    { name: "Edit Profile", icon: "fas fa-pencil-alt", action: " " },
    { name: "Setting & Privacy", icon: "fas fa-cogs", action: " " },
    { name: "Help & Support", icon: "fas fa-question-circle", action: " " },
    { name: "Logout", icon: "fas fa-sign-out-alt", action: "logout" }
  ];
  showprofile() {
    const profilesub = document.querySelector(".profile-link");
    if (profilesub) {
      profilesub.classList.toggle("profileshow");
    }
  }
  constructor(private authservice:AuthserviceService, private router:Router){}
  
  logout(){
    this.authservice.removeToken();
    this.router.navigate(['/login']);
  }

  onMenuItemClick(action: string) {
    if (action === 'logout') {
      this.logout(); 
    }
  }

}
