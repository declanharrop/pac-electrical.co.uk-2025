import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function SolarLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar />
      {children}
    </div>
  );
}
