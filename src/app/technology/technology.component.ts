import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
	technologies: Technology[] = [
    new Technology(1, "Git and Github", "A method of saving work done", "Very useful for reference", "Good"),
    new Technology(2, "HTML", "The layout of a page and sets the stage for work to be done", "I like HTML", "Expert"),
    new Technology(3, "CSS", "The styling function of the page", "The ability to explore is intriguing", "Expert"),
    new Technology(4, "Javascript", "A way to program a page to work", "I liked Javascript", "Good"),
    new Technology(5,"jQuery", "Javascript library which enhances Javascript", "Great Tool", "Good"),
    new Technology(6, "Typescript", "Also a library that enhances Javascript", "Great Tool", "Good"),
    new Technology(7, "Bootstrap", "A tool for forms and pages to look better", "Awesome Tool", "Beginner"),
    new Technology(8, "Angular", "App Developer", "Great for Apps for small devices and may i say Best tool Yet","Beginner")

	];

             
       constructor() { }

  ngOnInit() {
  }

}
