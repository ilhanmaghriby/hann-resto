type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <h1 className="font-bold text-2xl">{children}</h1>;
};
