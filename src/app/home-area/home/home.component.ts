import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    public randomDay = Math.floor(Math.random() * 7) + 1;

    constructor(private title: Title) { } // DI

    ngOnInit(): void {
        console.log("ngOnInit...");
        this.title.setTitle("DevGeekWeek | Home"); // Side-Effect
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy...");
    }

}
