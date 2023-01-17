import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
