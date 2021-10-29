import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    @Input() options: any[] = [];
    @Input() placeholder: string = '';
    @Output() change: EventEmitter<string> = new EventEmitter<string>();
    
    onChange(value: string) {
        this.change.emit(value);
    } 
}