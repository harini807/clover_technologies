import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface MenuItem {
  id: string;
  label: string;
  subItems?: MenuItem[];  // Optional sub-items for dropdowns
  subSubItems?: MenuItem[]; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedNav: string = ''; // Tracks the active top-level menu

  isHomePage: boolean = false;


  constructor(private router: Router) {}


  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home'; // Adjust '/' to match your homepage route
    });
  }

  navItems = [
    {id: 'home', label:'Home'},
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products', subItems: [
        { label: 'AIDC', id:'aidc', subItems: [
            { label: 'Barcode Scanners' , id: 'barcode-scanners' },
            { label: 'RFID Readers' , id: 'rfid-readers' },
            { label: 'Mobile Computers', id: 'mobile-computers'}
          ]
        },
        { label: 'AV Accessories', id:'av-accessories', subItems: [
            { label: 'Projectors', id: 'projectors'}, 
            { label: 'Webcams', id: 'webcamsAndConferenceCameras'},
            { label: 'Microphones', id:'microphone'},
            { label: 'Av Cabels', id: 'avCables' }
          ]
        }
      ]
    },
    { id: 'contact', label: 'Contact' }
  ];

  // Set the active top-level menu item
  setActiveNav(id: string): void {
    this.selectedNav = id; // Ensure only the top-level menu stays selected
  }
  
  
}
