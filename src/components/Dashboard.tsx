import React, { useState } from "react";
import { Mosaic } from "react-mosaic-component";
import CompanyInfoWidget from "./CompanyInfoWidget";
import TickerDropdown from "./TickerDropdown";
import { Company } from "../types";
import { getCompanyByTicker } from "../services/api";

const ELEMENT_MAP: { [id: string]: string } = {
  a: "Company info",
  b: "Company info",
  c: "Company info",
};

const Dashboard: React.FC = () => {
  const [companies, setCompanies] = useState<{ [id: string]: Company | null }>({
    a: null,
    b: null,
    c: null,
  });

  const handleTickerChange = async (ticker: string, id: string) => {
    const company = await getCompanyByTicker(ticker);
    setCompanies((prev) => ({ ...prev, [id]: company }));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <Mosaic<string>
          renderTile={(id, path) => (
            <div className="border p-4 pb-10">
              <div className="top">
                <TickerDropdown
                  onTickerChange={(ticker) => handleTickerChange(ticker, id)}
                />
                <h2 className="pt-1 pl-3 ">{ELEMENT_MAP[id]}</h2>
              </div>

              <CompanyInfoWidget company={companies[id]} />
            </div>
          )}
          initialValue={{
            direction: "row",
            first: "a",
            second: {
              direction: "column",
              first: "b",
              second: "c",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
