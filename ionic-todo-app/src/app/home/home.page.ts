import { Component } from '@angular/core';

interface Task {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  title = 'タスク登録';
  tasks: Task[] = [{ name: 'タスク1' }, { name: 'タスク2' }];
  task: string;
  constructor() {}

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    localStorage.tasks = JSON.stringify(this.tasks);
    this.task = '';
  }
}
