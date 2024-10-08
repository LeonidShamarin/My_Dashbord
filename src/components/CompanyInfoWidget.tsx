import React from "react";
import { Card, Text } from "@blueprintjs/core";
import { Company } from "../types";
import { getCompanyFullAddress } from "../utils/helpers";

interface CompanyInfoWidgetProps {
  company: Company | null;
}

const CompanyInfoWidget: React.FC<CompanyInfoWidgetProps> = ({ company }) => {
  if (!company) {
    return <Card className="h-full">Please select a company</Card>;
  }

  return (
    <Card className="h-full overflow-auto">
      <Text className="mb-2">
        <strong>ticker:</strong> {company.ticker}
      </Text>
      <Text className="mb-2">
        <strong>Name</strong> {company.name}
      </Text>

      <Text className="mb-2">
        <strong>Legal Name:</strong> {company.legal_name}
      </Text>
      <Text className="mb-2">
        <strong>Stock Exchange: </strong>
        {company.stock_exchange}
      </Text>
      <Text className="mb-2 mr-10">
        <strong> Short Description: </strong>
        {company.short_description}
      </Text>
      <Text className="mb-2 mr-10">
        <strong>Long Description:</strong> {company.long_description}
      </Text>
      <Text className="mb-2">
        <strong> Business Address:</strong>
        {getCompanyFullAddress(company)}
      </Text>
      <Text className="mb-7">
        <strong>Entity Legal Form: </strong>
        {company.entity_legal_form}
      </Text>
      <Text className="mb-2">
        <strong>Latest Filing Date:</strong> {company.latest_filing_date}
      </Text>
      <Text className="mb-2">
        <strong>Inc Country:</strong> {company.inc_country}
      </Text>
      <Text className="mb-2">
        <strong>Employees:</strong> {company.employees}
      </Text>
    </Card>
  );
};

export default CompanyInfoWidget;
