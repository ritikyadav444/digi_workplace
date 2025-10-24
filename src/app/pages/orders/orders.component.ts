import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  modalName: any;
  orderForm!: FormGroup;
  constructor(public modalService: NgbModal, private fb: FormBuilder) {}

  orders = [
    {
      orderID: 1,
      clientName: 'Ritik1 Yadav1',
      orderName: 'Web developer sites',
      assigneeName: 'Unnamed Assignee',
      status: 'Ongoing',
      startDate: 'Oct 23, 2025',
      endDate: 'Oct 28, 2025',
    },
    {
      orderID: 2,
      clientName: 'Anjali Sharma',
      orderName: 'E-commerce UI Design',
      assigneeName: 'Rahul Singh',
      status: 'Completed',
      startDate: 'Sep 15, 2025',
      endDate: 'Oct 5, 2025',
    },
    {
      orderID: 3,
      clientName: 'Karan Patel',
      orderName: 'Mobile App Backend',
      assigneeName: 'Sneha Verma',
      status: 'Pending',
      startDate: 'Oct 20, 2025',
      endDate: 'Nov 15, 2025',
    },
    {
      orderID: 4,
      clientName: 'Priya Nair',
      orderName: 'Portfolio Website',
      assigneeName: 'Unnamed Assignee',
      status: 'Ongoing',
      startDate: 'Oct 10, 2025',
      endDate: 'Oct 30, 2025',
    },
    {
      orderID: 5,
      clientName: 'Amit Kumar',
      orderName: 'Digital Marketing Dashboard',
      assigneeName: 'Ritika Sharma',
      status: 'Completed',
      startDate: 'Sep 25, 2025',
      endDate: 'Oct 10, 2025',
    },
    {
      orderID: 6,
      clientName: 'Simran Kaur',
      orderName: 'Restaurant Booking System',
      assigneeName: 'Ankit Tiwari',
      status: 'Cancelled',
      startDate: 'Aug 5, 2025',
      endDate: 'Aug 25, 2025',
    },
    {
      orderID: 7,
      clientName: 'Deepak Mehta',
      orderName: 'Custom CRM Integration',
      assigneeName: 'Rahul Singh',
      status: 'Ongoing',
      startDate: 'Oct 21, 2025',
      endDate: 'Nov 21, 2025',
    },
    {
      orderID: 8,
      clientName: 'Neha Gupta',
      orderName: 'Social Media Automation',
      assigneeName: 'Sneha Verma',
      status: 'Pending',
      startDate: 'Oct 25, 2025',
      endDate: 'Nov 5, 2025',
    },
    {
      orderID: 9,
      clientName: 'Vikram Chauhan',
      orderName: 'SEO Optimization Project',
      assigneeName: 'Amit Raj',
      status: 'Ongoing',
      startDate: 'Oct 10, 2025',
      endDate: 'Oct 27, 2025',
    },
    {
      orderID: 10,
      clientName: 'Tanvi Desai',
      orderName: 'Landing Page Redesign',
      assigneeName: 'Ritika Sharma',
      status: 'Completed',
      startDate: 'Sep 5, 2025',
      endDate: 'Sep 25, 2025',
    },
  ];

  ngOnInit() {
    this.orderForm = this.fb.group({
      serviceName: ['', Validators.required],
      clientName: ['', Validators.required],
      assigneeName: ['', Validators.required],
      quantity: ['', Validators.required],
      budget: ['', Validators.required],
      note: ['', Validators.required],
      endTime: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      this.orderForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const formValue = this.orderForm.value;
      if (this.modalName === 'Update order') {
        console.log('Patching order with data:', formValue);
        this.orderForm.reset();
      } else {
        this.orderForm.reset();
        console.log('Adding new order:', formValue);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.orderForm.patchValue({
        image: file,
      });
    }
  }

  actionCard(type: any, data: any, modal?: any) {
    if (type === 'Update Order') {
      this.openAddModal(modal, 'Update Order', data);
    }
    if (type === 'delete') {
      console.log('delete came');
    }
    if (type === 'info') {
      console.log('info came');
    }
  }

  openAddModal(modal: any, type: any, data?: any) {
    if (type === 'Create Order') {
      this.orderForm.reset();
    }
    if (type === 'Update Order' && data) {
      console.log(data , 'daata')
      this.orderForm.patchValue({
        serviceName: data.serviceName || '',
        clientName: data.clientName || '',
        assigneeName: data.assigneeName || '',
        quantity: data.quantity || '',
        budget: data.budget || '',
        note: data.note || '',
        endTime: data.endTime || '',
        startDate: data.startDate || '',
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
