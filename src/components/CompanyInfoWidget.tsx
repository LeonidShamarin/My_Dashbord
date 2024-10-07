import React, { useState } from 'react';
import { Card, H5, Text, Tab, Tabs } from '@blueprintjs/core';
import { Company } from '../types';
import { getCompanyFullAddress } from '../utils/helpers';

interface CompanyInfoWidgetProps {
  company: Company;
}

const CompanyInfoWidget: React.FC<CompanyInfoWidgetProps> = ({ company }) => {
  const [activeTab, setActiveTab] = useState('general');

  const renderGeneralInfo = () => (
    <>
      <Text className="mb-2">Ticker: {company.ticker}</Text>
      <Text className="mb-2">Exchange: {company.stock_exchange}</Text>
      <Text className="mb-2">CEO: {company.ceo}</Text>
      <Text className="mb-2">Employees: {company.employees}</Text>
      <Text className="mb-2">Description: {company.short_description}</Text>
    </>
  );

  const renderAddressInfo = () => (
    <>
      <Text className="mb-2">Full Address: {getCompanyFullAddress(company)}</Text>
      <Text className="mb-2">Business Phone: {company.business_phone_no}</Text>
    </>
  );

  const renderFinancialInfo = () => (
    <>
      <Text className="mb-2">Sector: {company.sector}</Text>
      <Text className="mb-2">Industry Category: {company.industry_category}</Text>
      <Text className="mb-2">Industry Group: {company.industry_group}</Text>
    </>
  );

  return (
    <Card className="h-full overflow-auto">
      <H5>{company.name}</H5>
      <Tabs id="CompanyInfoTabs" onChange={(newTab) => setActiveTab(newTab as string)} selectedTabId={activeTab}>
        <Tab id="general" title="General" panel={renderGeneralInfo()} />
        <Tab id="address" title="Address" panel={renderAddressInfo()} />
        <Tab id="financial" title="Financial" panel={renderFinancialInfo()} />
      </Tabs>
    </Card>
  );
};

export default CompanyInfoWidget;