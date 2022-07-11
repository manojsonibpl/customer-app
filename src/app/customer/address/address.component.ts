import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() custAddress: string;
  @Input() custState: string;
  @Input() custCity: string;
  @Input() custPincode: string;
  constructor() { }

  ngOnInit(): void {
  }

}
