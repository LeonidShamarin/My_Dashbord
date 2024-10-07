export interface Company {
    id: string;
    ticker: string;
    name: string;
    lei: string | null;
    legal_name: string;
    stock_exchange: string;
    sic: number;
    short_description: string;
    long_description: string;
    ceo: string;
    company_url: string;
    business_address: string;
    mailing_address: string;
    business_phone_no: string;
    hq_address1: string;
    hq_address2: string | null;
    hq_address_city: string;
    hq_address_postal_code: string;
    entity_legal_form: string | null;
    cik: string;
    latest_filing_date: string | null;
    hq_state: string | null;
    hq_country: string;
    inc_state: string | null;
    inc_country: string;
    employees: number;
    entity_status: string | null;
    sector: string;
    industry_category: string;
    industry_group: string;
  }
  
  export interface Security {
    id: string;
    company_id: string;
    stock_exchange_id: string;
    name: string;
    type: string;
    code: string;
    share_class: string;
    currency: string;
    round_lot_size: number;
    ticker: string;
    exchange_ticker: string;
    composite_ticker: string;
    alternate_tickers: string[];
    figi: string;
    cik: string;
    composite_figi: string;
    share_class_figi: string;
    figi_uniqueid: string;
    active: boolean;
    etf: boolean;
    delisted: boolean;
    primary_listing: boolean;
    primary_security: boolean;
    first_stock_price: string;
    last_stock_price: string;
    last_stock_price_adjustment: string;
    last_corporate_action: string;
    previous_tickers: string[];
    listing_exchange_mic: string;
  }
  