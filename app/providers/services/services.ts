import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EmployeeServices {
  employees: any[] = [
    {
      id: 1,
      firstName: "Amy",
      lastName: "Taylor",
      title: "CEO",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "amy@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
      id: 2,
      firstName: "Anup",
      lastName: "Gupta",
      title: "VP of Engineering",
      managerId: 1,
      managerName: "Amy Taylor",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "anup@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Jones",
      title: "VP of Marketing",
      managerId: 1,
      managerName: "Amy Taylor",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "michael@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
      id: 4,
      firstName: "Caroline",
      lastName: "Kingsley",
      title: "VP of Sales",
      managerId: 1,
      managerName: "Amy Taylor",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "caroline@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
      id: 5,
      firstName: "James",
      lastName: "Kennedy",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "james@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg"
    },
    {
      id: 6,
      firstName: "Jennifer",
      lastName: "Wu",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "jen@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
      id: 7,
      firstName: "Jonathan",
      lastName: "Bradley",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "jonathan@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
      id: 8,
      firstName: "Kenneth",
      lastName: "Sato",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "kenneth@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
    },
    {
      id: 9,
      firstName: "Lisa",
      lastName: "Parker",
      title: "Software Architect",
      managerId: 2,
      managerName: "Anup Gupta",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "lisa@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/lisa_parker.jpg"
    },
    {
      id: 10,
      firstName: "Brad",
      lastName: "Moretti",
      title: "Software Architect",
      managerId: 2,
      managerName: "Anup Gupta",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "brad@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/brad_moretti.jpg"
    },
    {
      id: 11,
      firstName: "Michelle",
      lastName: "Lambert",
      title: "Software Architect",
      managerId: 2,
      managerName: "Anup Gupta",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "michelle@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
      id: 12,
      firstName: "Miriam",
      lastName: "Aupont",
      title: "Marketing Manager",
      managerId: 3,
      managerName: "Michael Jones",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "miriam@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
      id: 13,
      firstName: "Olivia",
      lastName: "Green",
      title: "Marketing Manager",
      managerId: 3,
      managerName: "Michael Jones",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "olivia@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
      id: 14,
      firstName: "Robert",
      lastName: "Sullivan",
      title: "Marketing Manager",
      managerId: 3,
      managerName: "Michael Jones",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "robert@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/robert_sullivan.jpg"
    },
    {
      id: 15,
      firstName: "Tammy",
      lastName: "Robinson",
      title: "Software Architect",
      managerId: 2,
      managerName: "Anup Gupta",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "tammy@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/tammy_robinson.jpg"
    },
    {
      id: 16,
      firstName: "Victor",
      lastName: "Ochoa",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "victor@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    }
  ];

  constructor(public http: Http) { }

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(this.employees);
    });
  }

  findByName(public name: String) {
    return new Promise((resolve, reject) => {
      let filtered = this.employees.filter(employee => (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1);
      resolve(filtered);
    });
  }

  findById(public id: Number) {
    return new Promise((resolve, reject) => {
      resolve(this.employees[id - 1]);
    });
  }
}

