export const metadata = {
  title: "Dashboard",
  description: "Bank Statement Reconciliation",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
