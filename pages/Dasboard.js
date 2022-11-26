import React from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import ModalRestaurant from '../components/ModalRestaurant';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

const GET_RESTAURANT_USERS = gql`
  query getRestaurantUsers {
    getRestaurantUsers{
        id
        name
        description
        number_phone
        address
        email_address
        red_social
        user_id{
            id
        }
        active
    }
  }
`;


const Dasboard = () => {

    //Consulta apollo
    const { data, loading, error } = useQuery(GET_RESTAURANT_USERS);

    //Proteger que no accedamos a data antes de tener resultados
    if(loading) return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
    

    const negocioRequerido = (daa) => {
        return(
            <div className="bg-gray-400 py-2 px-3 w-full my-3 max-w-sm text-center font-bold mx-auto">
                <p>Aun no cuentas con un negocio, precione el boton para crearlo</p>
                <Link href="/Restaurante">
                    <a className="bg-blue-800 py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">Crear Negocio</a>
                </Link>
            </div>
            
        );
    }

    return (
        
        <Layout>
            <div className="py-10 min-h-screen">
                <div className="bg-gray-400 text-center py-4">
                <ModalRestaurant/>
                { data ? (
                    negocioRequerido()
                ) : null}
                </div>
                <div className="text-center py-4">
                <div className="flex justify-around bg-gray-400">
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"></div>
                        <ol className="border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-center md:gap-6">
                            <li>
                                <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                                <p className="text-gray-500 text-sm mt-2">01.07.2021</p>
                                </div>
                                <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Title of section 1</h4>
                                <p className="text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                                <p className="text-gray-500 text-sm mt-2">13.09.2021</p>
                                </div>
                                <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Title of section 2</h4>
                                <p className="text-gray-500 mb-3">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                                <p className="text-gray-500 text-sm mt-2">25.11.2021</p>
                                </div>
                                <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Title of section 3</h4>
                                <p className="text-gray-500 mb-3">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                                </div>
                            </li>
                        </ol>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"></div>
                </div>
                    
                    {/* <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                        className="rounded-full w-32 mb-4 mx-auto"
                        alt="Avatar"
                    />
                    <h5 className="text-xl font-medium leading-tight mb-2">Jose Anguiano</h5>
                    <p className="text-gray-500">Back End Engineer</p> */}
                </div>
            </div>
        </Layout>
        
     );
}
 
export default Dasboard;