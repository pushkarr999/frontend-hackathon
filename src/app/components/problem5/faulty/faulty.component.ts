import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faulty',
  templateUrl: './faulty.component.html',
  styleUrls: ['./faulty.component.scss']
})
export class FaultyComponent {
  dropdownOptions: any[] = [
  ];
  ans = false;
  constructor(private apiService: ApiService) {}
  data:any = {
    atm:'',
    temp:'',
    ups:'',
    earth:'',
    rcur:'',
    ycurr:'',
    bcurr:'',
    rawPowOk:'',
    insStatus:'',
    macId:''
  };
  ngOnInit() {
    this.loadDropdownOptions();
  }

  selectedValue: any;

  getSelectedValue(value: string) {
    this.selectedValue = value;
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
    const datePickerValue: string = (document.getElementById('datepicker') as HTMLInputElement).value;
    let unixTime = 0;
    if (datePickerValue) {
      const selectedDate: Date = new Date(datePickerValue);
      unixTime = Math.floor(selectedDate.getTime() / 1000);

    } else {
      alert('Please select a valid date.');
    }

    const data = {
      macId: this.selectedValue,
      start: unixTime,
      end: unixTime + 82800 + 3540 + 59
    }
    // Display the Unix timestamp (you can send this to your server or store it as needed)
    console.log('Selected Unix Timestamp: ' + unixTime, unixTime + 82800 + 3540 + 59);
    this.apiService.p5(data).subscribe(
      (options:any) => {
        console.log("opetions",options)
        this.data = options
      },
      (error) => {
        console.error('Error fetching dropdown options:', error);
      }
    );
  }
}
