import { API_URL } from "@/constants";
import authHeaders from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";

export default async function ManagersLayout({
    children,
  }: Readonly<{
    children: React.ReactNode,
  }>) {
    const response = await fetch(`${API_URL}/managers`, {
        headers: {...authHeaders()},
        next: {
          tags: ["dashboard:managers"]
        }
      })
      const managers : Manager[] = await response.json()
      if(!managers || managers === undefined) return null

    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
                {managers.map((manager : Manager) => (
                <ManagerCard 
                    manager={manager} 
                    full={false} 
                    hover={true} 
                    key={manager.managerId} 
                    main={false}
                />
            ))}
            </div>
            <div className="w-6/12 ">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-10/12">{children}</div>
                </div>
            </div>
        </>
      
    );
  }