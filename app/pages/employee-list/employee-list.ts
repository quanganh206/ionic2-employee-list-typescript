import {Page, NavController} from 'ionic-angular';
import {EmployeeServices} from '../../providers/services/services';
import {EmployeeDetailsPage} from '../employee-details/employee-details';

/*
  Generated class for the EmployeeListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/employee-list/employee-list.html',
  providers: [EmployeeServices]
})
export class EmployeeListPage {
  employees: any[];
  constructor(public nav: NavController, public employeeServices: EmployeeServices) {
    this.employeeServices = employeeServices;
    this.employeeServices.findAll().then(data => { this.employees = data });
  }

  search(event, key) {
    this.employeeServices.findByName(event.target.value).then(employees => this.employees = employees);
  }

  itemTapped(event, employee) {

    this.nav.push(EmployeeDetailsPage, {
      employee: employee
    });

  }
}
