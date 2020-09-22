import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-go-to-link",
  templateUrl: "./button-go-to-link.component.html",
  styleUrls: ["./button-go-to-link.component.scss"],
})
export class ButtonGoToLinkComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  constructor() {}

  ngOnInit() {}
}
