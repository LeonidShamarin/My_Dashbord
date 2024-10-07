import { Company, Security } from '../types';

export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
};

export const getCompanyFullAddress = (company: Company): string => {
  const parts = [
    company.hq_address1,
    company.hq_address2,
    company.hq_address_city,
    company.hq_state,
    company.hq_address_postal_code,
    company.hq_country
  ];
  return parts.filter(Boolean).join(', ');
};

export const getSecurityDisplayName = (security: Security): string => {
  return `${security.name} (${security.ticker})`;
};