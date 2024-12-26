import LoginForm from "@/components/form/LoginForm";

export default async function page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <LoginForm />
    </div>
  );
}
