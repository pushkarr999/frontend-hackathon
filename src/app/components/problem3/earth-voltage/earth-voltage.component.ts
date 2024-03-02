import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-earth-voltage',
  templateUrl: './earth-voltage.component.html',
  styleUrls: ['./earth-voltage.component.scss']
})
export class EarthVoltageComponent {
  dropdownOptions: any[] = [
  ];
  ans = false;
  constructor(private apiService: ApiService) {}
  atm:any;
  aev:any;
  faulty:any;
  ngOnInit() {
    this.loadDropdownOptions();
  }

  selectedValue: any;

  getSelectedValue(value: string) {
    this.selectedValue = value;
    this.atm = 
    console.log("selectedValue",this.selectedValue)
  }

  loadDropdownOptions() {
    this.apiService.getDropdownOptions().subscribe(
      (options:any) => {
        console.log("opetions",options)
        options.forEach((element:any) => {
          if(element.atmid != '')
          this.dropdownOptions.push({
            label: element.atmid,
            key: element._id
          })
        });
      },
      (error) => {
        console.error('Error fetching dropdown options:', error);
      }
    );
  }

  saveDateTime() {
    // Get the value of the datetime picker
    const startDatetimePicker:any = document.getElementById('startDatetimePicker');
    const startSelectedDateTime = startDatetimePicker.value;

    // Convert the selected date and time to Unix timestamp (in seconds)
    const startunixTimestamp = Math.floor(new Date(startSelectedDateTime).getTime() / 1000);

    const datetimePicker:any = document.getElementById('endDatetimePicker');
    const endSelectedDateTime = datetimePicker.value;

    // Convert the selected date and time to Unix timestamp (in seconds)
    const endunixTimestamp = Math.floor(new Date(endSelectedDateTime).getTime() / 1000);

    const data = {
      macId: this.selectedValue,
      start: startunixTimestamp,
      end: endunixTimestamp
    }
    // Display the Unix timestamp (you can send this to your server or store it as needed)
    console.log('Selected Unix Timestamp: ' + startunixTimestamp, endunixTimestamp);
    this.apiService.getFault(data).subscribe(
      (options:any) => {
        console.log("opetions",options)
        this.ans = true
        this.aev = options.averageEV
        this.faulty = options.message
      },
      (error) => {
        console.error('Error fetching dropdown options:', error);
      }
    );
  }
}
