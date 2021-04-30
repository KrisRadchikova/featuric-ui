import {Component, Injector, Input, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Input()
  isSidenav: boolean;

  @Input()
  categories: Category[];

  lang = 'ru';

  constructor(private _snackBar: MatSnackBar,
              private injector: Injector,
              public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  changeLang(): void {
    this.lang === 'ru' ? this.lang = 'en' : this.lang = 'ru';
    this.translate.use(this.lang);
  }

  copyLink(): void {
    const translateService = this.injector.get(TranslateService);
    let message, action;
    translateService.stream('SNACKBAR').subscribe(value => {
      message = value.MESSAGE;
      action = value.ACTION;
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }
}
