import FrontLayout from "@/components/layouts/FrontLayout";
export const metadata = {
  title: "Alumni Portal",
  description: "Connect with your alma mater and fellow alumni",
};
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <FrontLayout>
      <div className="container mx-auto p-4 py-10">{children}</div>
    </FrontLayout>
  );
}
