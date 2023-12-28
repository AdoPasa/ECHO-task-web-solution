import { Component, Input, OnInit } from '@angular/core';
import { TickerHistoryResponse } from '../../../../api/models/ticker-history-response';
import { TickerService } from '../../../../api/services/ticker.service';

@Component({
  selector: 'app-ticker-item',
  templateUrl: './ticker-item.component.html',
  styleUrls: ['./ticker-item.component.scss']
})
export class TickerItemComponent implements OnInit {
  @Input() data: TickerHistoryResponse | null = null;

  constructor(
    private tickerService: TickerService
  ) { }

  ngOnInit(): void {
    if(this.data && (this.data.status == 0 || this.data.status == 2)) {
      this.tickerService.getTickerHistory(this.data.symbol!, this.data.date!).subscribe(response => {
        this.data = response;
      });
    }
  }  
}
