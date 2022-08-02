import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(public readonly swalTargets: SwalPortalTargets,
    private route: Router) { }

  ngOnInit() {
    Swal.fire({
      title: 'Purchase Successful',
      html: '<div><p style="font-family:"Poppins";font-style: normal;font-weight: 300;font-size: 18px;line-height: 30px;">You will get your product soon! <br /><br/>to experience the spatial audio withadaptive EQ that tunes music to your ears.</p></div>',
      imageUrl: 'assets/success.png',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      showCloseButton: true,
    }).then((result) => {
      console.log(result);
      if (result.isDismissed) {
        this.route.navigateByUrl('/');
      }
    })
  }

  close() {
    this.route.navigateByUrl('/');
  }

}
