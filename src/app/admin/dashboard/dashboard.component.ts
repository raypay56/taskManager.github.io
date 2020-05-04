import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  ToDay: Date;

  Clients: string[];
  Projects: string[];
  Years: number[]= [];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor( private dashboard:DashboardService) { }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = "Sam Perth";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "ABC Infotech","DEF Software Solutions", "GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B","Project C","Project D"
    ];

    for (var i=2019; i>=2010; i--){
      this.Years.push(i);
    };

    this.TeamMembersSummary = this.dashboard.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region:"East", Members:[
          {ID:1, Name:"Ford", Status:"Available"},
          {ID:2, Name:"Miler", Status:"Available"},
          {ID:3, Name:"Justin", Status:"Busy"},
          {ID:4, Name:"James", Status:"Busy"},
        ]
      },
      {
        Region:"South", Members:[
          {ID:1, Name:"Ashley", Status:"Available"},
          {ID:2, Name:"Musk", Status:"Available"},
          {ID:3, Name:"Joe", Status:"Busy"},
          {ID:4, Name:"Ryan", Status:"Busy"},
        ]
      },
      {
        Region:"West", Members:[
          {ID:1, Name:"Misha", Status:"Available"},
          {ID:2, Name:"Fisher", Status:"Available"},
          {ID:3, Name:"Lisa", Status:"Busy"},
          {ID:4, Name:"Pam", Status:"Busy"},
        ]
      },
      {
        Region:"North", Members:[
          {ID:1, Name:"Mike", Status:"Available"},
          {ID:2, Name:"Archor", Status:"Available"},
          {ID:3, Name:"Keth", Status:"Busy"},
          {ID:4, Name:"Duke", Status:"Busy"},
        ]
      },
    ];
  }

  onProjectChange($event){
      if($event.target.innerHTML == "Project A"){
        this.ProjectCost = 234234;
        this.CurrentExpenditure = 65756;
        this.AvailableFunds = 173399;
      }
      else if($event.target.innerHTML == "Project B"){
        this.ProjectCost = 746324;
        this.CurrentExpenditure = 76444;
        this.AvailableFunds = 2784243;
      }
      else if($event.target.innerHTML == "Project C"){
        this.ProjectCost = 345637;
        this.CurrentExpenditure = 65756;
        this.AvailableFunds = 173399;
      }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 29987664;
      this.CurrentExpenditure = 65756;
      this.AvailableFunds = 173399;
    }
  }
 

}
