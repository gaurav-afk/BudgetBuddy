export type FrequencyOverlayProps = {
  selectedTab: string;
  total: string;
  repaymentPeriod: string;
  installmentAmount: string;
  execution: string;
  interval: string;
  times: string;
  onClose: (newSelectedTab?: string, data?: { total?: string, repaymentPeriod?: string, installmentAmount?: string, execution?: string, interval?: string, times?: string }) => void;
    // onClose: () => void;
    // onSubmit: (selectedTab: string, data: { total?: string, repaymentPeriod?: string, installmentAmount?: string, execution?: string, interval?: string, times?: string }) => void;
  };