import { API_URL } from "@/constants";
import authHeaders from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";
import CreateManagerForm from "./_components/CreateManagerForm";
import CreateManagerModal from "./_components/CreateManagerModal";
import { getUserRoles } from "@/helpers/getUserRoles";

export default async function ManagersLayout({
    children,
  }: Readonly<{
    children: React.ReactNode,
  }>) {
    const role = getUserRoles()

    if (role[0] === "Admin"){
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
                  <div className="absolute z-0 right-10 top-24">
                    <CreateManagerModal>
                      <CreateManagerForm/>
                    </CreateManagerModal>
                  </div>
                  <div className="w-10/12">{children}</div>
                </div>
            </div>
        </>
      
    );
    } else {
      return (
        <div className="w-10/12">
          {children}
        </div>
      )
    }
    

    
  }