import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GlobalConfigService } from "../../services/global-config.service";
import { TickerHistoryResponse } from "../models/ticker-history-response";

@Injectable()
export class TickerService{
    baseUrl: string;

    constructor(
        private http: HttpClient,
        configService: GlobalConfigService,
    ){
        const config = configService.getConfig();
        this.baseUrl = config.apiBaseUrl;
    }

    getTickersHistory(symbols:string[], date:string){
        let queryParams = new URLSearchParams();

        queryParams.append('date', date);
        symbols.forEach((symbol) => queryParams.append('symbols', symbol));

        return this.http.get<TickerHistoryResponse[]>(
            this.baseUrl + '/Tickers?' + queryParams.toString()
        );
    }
    
    getTickerHistory(symbol:string, date:string){
        let queryParams = new URLSearchParams();

        queryParams.append('date', date);

        return this.http.get<TickerHistoryResponse>(
            this.baseUrl + '/Tickers/' + encodeURIComponent(symbol) + '?' + queryParams.toString()
        );
    }
}