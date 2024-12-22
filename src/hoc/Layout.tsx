import React from 'react';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return <div className="layout">{children}</div>;
};

export default Layout;
