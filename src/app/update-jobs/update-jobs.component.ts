import { Component, OnInit } from '@angular/core';
import { UpdateJobsService } from './update-jobs.service';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent implements OnInit {

  jobData = [];
  foundJob = [];
  link = [];
  constructor(private ujs: UpdateJobsService) { }

  ngOnInit() {
    this.onUpdateServer();
    this.ujs.connectFirebase().then(
      (data) => {
        this.jobData = data;
        console.log(this.jobData);
      }
    );
  }

  onUpdateServer() {
    this.ujs.setData();
  }

  onSearch(keyWord) {
    this.foundJob = [];
    this.link = [];
    this.jobData.forEach(job => {
      job.data.forEach(subJob => {
        if (subJob.includes(keyWord.value)) {
          const temp = subJob.split(';');
          this.foundJob.push(temp[0]);
          this.link.push(temp[1]);
        }
      });
    });
  }

}
