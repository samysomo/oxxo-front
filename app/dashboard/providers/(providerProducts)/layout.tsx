import { API_URL } from "@/constants";
import authHeaders from "@/helpers/authHeaders";

export default async function ProviderProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode,
  }>) {

    return (
      <main className="h-[90vh] w-full flex justify-center">
          {children}
      </main>
    );
  }