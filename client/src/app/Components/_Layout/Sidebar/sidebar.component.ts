import { Component, OnInit } from '@angular/core';
import {Renderer} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    constructor(private render: Renderer) {
    }

    ngOnInit() { }

    toggleMenu(event: any){
        let classList: any = event.target.classList;
        let hasClass = classList.contains('collapse');
        this.render.setElementClass(event.target, 'collapse', !hasClass);

        console.log(event);
        // document.querySelectorAll('.my #awesome selector');
        event.preventDefault();
    }

}