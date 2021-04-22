import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from '../../serivce/loader.service';

@Component({
  selector: 'app-loader-view',
  templateUrl: './loader-view.component.html',
  styleUrls: ['./loader-view.component.scss']
})
export class LoaderViewComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
