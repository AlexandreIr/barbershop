import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
            <Image src="/logo.png" alt="logo" height={20} width={120} />
            <Button variant="outline" size="icon" className="h-6 w-6">
                <MenuIcon size={16}/>
            </Button>
            </CardContent>
            
        </Card>
    );
}

export default Header;