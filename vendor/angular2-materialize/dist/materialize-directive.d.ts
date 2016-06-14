import { ElementRef, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
export declare class MaterializeDirective implements AfterViewInit, DoCheck, OnChanges {
    private _el;
    private _params;
    private _functionName;
    private previousValue;
    private changeListenerShouldBeAdded;
    constructor(_el: ElementRef);
    materializeParams: any;
    materialize: string;
    materializeSelectOptions: any;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngDoCheck(): boolean;
    private performElementUpdates();
    private performLocalElementUpdates();
    private isSelect();
    private isDatePicker();
    private enableDPButtons();
}
