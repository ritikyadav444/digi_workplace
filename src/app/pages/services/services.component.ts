import { Component } from '@angular/core';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  cardsData = [
    {
      image: '../../../assets/images/testimg.png',
      title: 'Web developer sites',
      price: '1 AUD$',
      time:'One-Time'
    },{
      image: '../../../assets/images/testimg.png',
      title: 'Mobile App Development',
      price: '50 AUD$',
      time:'One-Time'
    },{
      image: '../../../assets/images/testimg.png',
      title: 'UI/UX Design',
      price: '30 AUD$',
      time:'One-Time'
    },{
      image: '../../../assets/images/testimg.png',
      title: 'SEO Optimization',
      price: '20 AUD$',
      time:'One-Time'
    },{
      image: '../../../assets/images/testimg.png',
      title: 'Web developer sites',
      price: '1 AUD$',
      time:'One-Time'
    },
  ]

  actionCard(type:any ,data:any){
    if(type=='edit'){
      console.log('edit came')
    }
    if(type=='delete'){
      console.log('delete came')
    }
    if(type=='info'){
      console.log('info came')
    }
  }
}
