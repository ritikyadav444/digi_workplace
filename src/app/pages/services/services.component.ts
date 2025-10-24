import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  modalName: any;
  serviceForm!: FormGroup;
  public editorData = '<p>Type your description here...</p>';

  constructor(public modalService: NgbModal, private fb: FormBuilder) {}

  cardsData = [
    {
      image: '../../../assets/images/testimg.png',
      title: 'Web developer sites',
      price: '1 AUD$',
      time: 'One-Time',
    },
    {
      image: '../../../assets/images/testimg.png',
      title: 'Mobile App Development',
      price: '50 AUD$',
      time: 'One-Time',
    },
    {
      image: '../../../assets/images/testimg.png',
      title: 'UI/UX Design',
      price: '30 AUD$',
      time: 'One-Time',
    },
    {
      image: '../../../assets/images/testimg.png',
      title: 'SEO Optimization',
      price: '20 AUD$',
      time: 'One-Time',
    },
    {
      image: '../../../assets/images/testimg.png',
      title: 'Web developer sites',
      price: '1 AUD$',
      time: 'One-Time',
    },
    {
      image: '../../../assets/images/testimg.png',
      title: 'Web developer sites',
      price: '1 AUD$',
      min: 1,
      max: 10,
      currency: 'AUD$',
      pricingType: 'Fixed',
      startTime: '09:00',
      endTime: '17:00',
      description: '<p>Web development service</p>',
      time: 'One-Time',
    },
  ];

  ngOnInit() {
    this.serviceForm = this.fb.group({
      serviceName: ['', Validators.required],
      min: ['', Validators.required],
      max: ['', Validators.required],
      currency: ['', Validators.required],
      pricingType: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: ['', Validators.required],
      image: [null],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      this.serviceForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      const formValue = this.serviceForm.value;
      if (this.modalName === 'Update Service') {
        console.log('Patching service with data:', formValue);
        this.serviceForm.reset()
      } else {
        this.serviceForm.reset()
        console.log('Adding new service:', formValue);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.serviceForm.patchValue({
        image: file,
      });
    }
  }

  actionCard(type: any, data: any, modal?: any) {
    if (type === 'Update Service') {
      this.openAddModal(modal, 'Update Service' , data);
    }
    if (type === 'delete') {
      console.log('delete came');
    }
    if (type === 'info') {
      console.log('info came');
    }
  }

  openAddModal(modal: any, type: any , data?:any) {
    if (type === 'Create Service') {
    this.serviceForm.reset()
  }
  if (type === 'Update Service' && data) {
    this.serviceForm.patchValue({
      serviceName: data.title || '',
      min: data.min || '',
      max: data.max || '',
      currency: data.currency || '',
      pricingType: data.pricingType || '',
      startTime: data.startTime || '',
      endTime: data.endTime || '',
      description: data.description || '',
      image: data.image || null,
    });
  }
    this.modalName = type;
    this.modalService.open(modal, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
  }
}
