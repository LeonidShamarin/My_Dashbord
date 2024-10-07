import securitiesData from '../data/securities.json';
import companiesData from '../data/companies-lookup.json';
import { Company, Security } from '../types';

export const getSecurities = (): Promise<Security[]> => {
  return Promise.resolve(securitiesData);
};

export const getCompanies = (): Promise<Company[]> => {
  return Promise.resolve(companiesData);
};

export const getCompanyByTicker = async (ticker: string): Promise<Company | undefined> => {
  const companies = await getCompanies();
  return companies.find(company => company.ticker === ticker);
};

export const getSecuritiesByCompanyId = async (companyId: string): Promise<Security[]> => {
  const securities = await getSecurities();
  return securities.filter(security => security.company_id === companyId);
};