export type StepsLayoutProps = {
  title: string;
  desc: string;
  hide: boolean;
  hideBackBtn?: boolean;
  onSubmit: () => void;
  children: React.ReactNode;
};
