import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon, icons } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershopinfo";
import ServiceItem from "./_components/service-item";

interface BarberShopDetailsProps {
    params: {
        id?: string;
    };
}

const BarberShopDetailsPage = async ({params}:BarberShopDetailsProps) => {
    if(!params.id){
        return null;
    }
    
    const barbershop = await db.barbershop.findUnique({
        where:{
            id: params.id,
        },
        include: {
            services: true
        }
    });

    if(!barbershop) {
        return null;
    }

    return ( 
        <div>
            <BarbershopInfo barbershop={barbershop}/>

            <div className="flex gap-3 px-5 pt-4">
                <Button className="py-2 px-4">Serviços</Button>
                <Button variant="outline" className="py-2 px-4">Informações</Button>
            </div>

            <div className="px-5 flex flex-col gap-3 py-6">
                {barbershop.services.map((service)=>(
                    <ServiceItem key={service.id} service={service}/>
                ))}

            </div>
        </div>
        );
}
 
export default BarberShopDetailsPage;