import {Page, NavController, NavParams} from 'ionic-angular';
import {EmployeeServices} from '../../providers/services/services';

/*
  Generated class for the EmployeeDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/employee-details/employee-details.html',
  providers: [EmployeeServices]
})
export class EmployeeDetailsPage {
  employee: any;
  constructor(public nav: NavController, public navParams: NavParams, public employeeServices: EmployeeServices) {
    // If we navigated to this page, we will have an item available as a nav param
    this.employee = navParams.get('employee');
    this.employeeServices = employeeServices;
  }
  
  viewManager(event, managerId) {
        this.employeeServices.findById(managerId).then(employee =>
            this.nav.push(EmployeeDetailsPage, {
                employee: employee
            })
        );

    }
}
