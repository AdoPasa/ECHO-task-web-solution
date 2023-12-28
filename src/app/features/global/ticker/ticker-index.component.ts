import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TickerHistoryResponse } from '../../../api/models/ticker-history-response';
import { TickerService } from '../../../api/services/ticker.service';
import moment from 'moment';

@Component({
  selector: 'app-ticker-index',
  templateUrl: './ticker-index.component.html',
  styleUrls: ['./ticker-index.component.scss']
})
export class TickerIndexComponent {
  loadedTickerData: TickerHistoryResponse[] = [];
  tickerList: string[] = [];
  tickerSymbol = '';
  selectedDate = '';

  constructor(
    private translateService:TranslateService,
    private tickerService: TickerService,
  ) { }

  addTicker() {
    let symbol = this.tickerSymbol.trim();

    if(symbol && this.tickerList.indexOf(symbol) == -1) {
      this.tickerList = [...this.tickerList, symbol];
    }

    this.tickerSymbol = '';
  }

  searchTickers() {
    if(this.tickerList.length == 0) {
      alert(this.translateService.instant('tickers.at-least-one-ticker-required'));
      return;
    }

    if(!this.selectedDate) {
      alert(this.translateService.instant('tickers.date-is-required'));
      return;
    }

    let yesterdayDate = moment().add(-1, 'd').format('YYYY-MM-DD');

    if(this.selectedDate > yesterdayDate) {
      alert(this.translateService.instant('tickers.date-must-be-less-than-today'));
      return;
    }

    this.tickerService.getTickersHistory(this.tickerList, this.selectedDate).subscribe((response) => {
      this.loadedTickerData = response;
    });
  }
}
