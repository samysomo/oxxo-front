import { API_URL } from "@/constants";
import authHeaders from "@/helpers/authHeaders";
import ProviderCard from "../_components/ProviderCard";
import CreateProviderModal from "../_components/CreateProviderModal";
import CreateProviderForm from "../_components/CreateProviderForm";

export default async function ProvidersLayout({
    children,
  }: Readonly<{
    children: React.ReactNode,
  }>) {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {...authHeaders()},
        next: {
          tags: ["dashboard:providers"]
        }
      })
      const providers : Provider[] = await response.json()
      if(!providers || providers === undefined) return null

    return (
        <>
            <div className="w-4/12 grid grid-cols-2 max-h-[90vh] overflow-hidden overflow-y-auto">
                {providers.map((provider) => (
                    <ProviderCard key={provider.providerId} provider={provider} hover={true} full={false} main={false}/>
                ))}
            </div>
            <div className="w-6/12">
              <div className="absolute z-0 right-10 top-24">
                <CreateProviderModal>
                  <CreateProviderForm/>
                </CreateProviderModal>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                  <div className="w-10/12">{children}</div>
              </div>
            </div>
        </>
      
    );
  }