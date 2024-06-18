import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/Services/theme.service';
import { ToasterService } from 'src/app/Services/toaster.service';
import { InquiriesService } from 'src/app/Services/inquiries.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private themeService: ThemeService,
    private fb: FormBuilder,
    private toasterService: ToasterService,
    private inquiriesService: InquiriesService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization code here
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  get isDarkMode() {
    return this.themeService.isDarkModeEnabled();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.inquiriesService.sendInquiry(this.contactForm.value)
        .subscribe(
          (response: any) => {
            console.log('Inquiry sent successfully', response);
            this.toasterService.success('Inquiry sent successfully!', 'Success');
            this.contactForm.reset();
          },
          (error: any) => {
            console.error('Error sending inquiry', error);
            this.toasterService.error('Error sending inquiry', 'Error');
          }
        );
    }
  }
}
