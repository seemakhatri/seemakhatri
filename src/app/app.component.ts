import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from './Services/theme.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  loading = true;
  title = 'my-portfolio';

  constructor(private themeService: ThemeService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngAfterViewInit() {
    const initialLoadingScreen = document.getElementById('initialLoadingScreen');
    if (initialLoadingScreen) {
      initialLoadingScreen.style.display = 'none';
    }
  }

  get isDarkMode() {
    return this.themeService.isDarkModeEnabled();
  }
}
