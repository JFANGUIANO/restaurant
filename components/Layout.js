import React from 'react';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/router';

const Layout = ({children}) => {

    //Hook de next
    const router = useRouter();

    return ( 
        <>

            {router.pathname === '/login' || router.pathname === '/createuser' ? (
                <div className=" bg-gray-800 min-h-screen flex flex-col justify-center">
                <div>
                    {children}
                </div>
            </div>
            ) : (
                <div className="bg-gray-200 min-h-full xl:min-h-full">
                   
                    <Sidebar />
                        <main className="text-gray-700 bg-gray-400">
                            {children} 
                        </main>
                </div>
            )}

            
            
        </>
     );
}
 
export default Layout;