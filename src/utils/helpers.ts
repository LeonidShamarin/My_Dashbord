import { Company } from '../types';

export const getCompanyFullAddress = (company: Company): string => {
  const parts = [
    company.hq_address1,
    company.hq_address2,
    company.hq_address_city,
    company.hq_state,
    company.hq_address_postal_code,
    company.hq_country
  ].filter(Boolean);
  
  return parts.join(', ');
};