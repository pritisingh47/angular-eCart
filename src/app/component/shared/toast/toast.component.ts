import { Component, OnInit, TemplateRef } from '@angular/core';
import {ToastService} from 'src/app/service/toast.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

 
  constructor(public toastService: ToastService) {}

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}
