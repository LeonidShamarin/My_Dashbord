import React, { useEffect, useState } from "react";
import { HTMLSelect } from "@blueprintjs/core";
import { getSecurities } from "../services/api";
import { Security } from "../types";

interface TickerDropdownProps {
  onTickerChange: (ticker: string) => void;
}

const TickerDropdown: React.FC<TickerDropdownProps> = ({ onTickerChange }) => {
  const [securities, setSecurities] = useState<Security[]>([]);
  const [selectedTicker, setSelectedTicker] = useState("");

  useEffect(() => {
    const fetchSecurities = async () => {
      const fetchedSecurities = await getSecurities();
      setSecurities(fetchedSecurities);
    };
    fetchSecurities();
  }, []);

  const handleTickerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ticker = event.target.value;
    setSelectedTicker(ticker);
    onTickerChange(ticker);
  };

  return (
    <HTMLSelect
      value={selectedTicker}
      onChange={handleTickerChange}
      options={[
        { label: "Select framework...", value: "" },
        ...securities.map((security) => ({
          label: `${security.name} (${security.ticker})`,
          value: security.ticker,
        })),
      ]}
    />
  );
};

export default TickerDropdown;