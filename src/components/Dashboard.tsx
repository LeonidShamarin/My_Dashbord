import React, { useState } from "react";
import { Mosaic } from "react-mosaic-component";
import CompanyInfoWidget from "./CompanyInfoWidget";
import TickerDropdown from "./TickerDropdown";
import { Company } from "../types";
import { getCompanyByTicker } from "../services/api";

const Dashboard: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleTickerChange = async (ticker: string) => {
    const company = await getCompanyByTicker(ticker);

    setSelectedCompany(company ?? null);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4">
        <TickerDropdown onTickerChange={handleTickerChange} />
      </div>
      <div className="flex-1">
        <Mosaic<string>
          renderTile={(id) => (
            <CompanyInfoWidget company={selectedCompany || ({} as Company)} />
          )}
          initialValue={{
            direction: "row",
            first: "CompanyInfo1",
            second: {
              direction: "column",
              first: "CompanyInfo2",
              second: "CompanyInfo3",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
