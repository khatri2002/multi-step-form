export type StepsLayoutProps = {
  title: string;
  desc: string;
  hide: boolean;
  hideBackBtn?: boolean;
  showConfirmBtn?: boolean;
  loading?: boolean;
  onSubmit: () => void;
  children: React.ReactNode;
};
