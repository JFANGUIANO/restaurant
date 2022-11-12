import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import Swal from 'sweetalert2';

const ADD_NEW_USUARIO = gql`
    mutation addNewUsuario($input: UsuarioInput) {
        addNewUsuario(input: $input) {
            id
            first_name
            last_name
            first_apellido
            last_apellido
            email
            active
            create_time
            create_user
        } 
    }
`;

const CreateUser = () => {

    //Staet para el mensaje
    //const [mensaje, guardarMensaje] = useState(null);

    // Mutation para crear nuevos usuarios en graphql
    const [ addNewUsuario ] = useMutation(ADD_NEW_USUARIO);

    //Routing
    const router = new useRouter();

    //validacion del formulario
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            first_apellido: '',
            last_apellido: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                        .required('El Primer Nombre es Obligatorio'),
            last_name: Yup.string(),
            first_apellido: Yup.string()
                        .required('El Apellido Paterno es Obligatorio'),
            last_apellido: Yup.string()
                        .required('El Apellido Materno es Obligatorio'),
            email: Yup.string()
                        .email('El Email no es valido')
                        .required('El Email es Obligatorio'),
            password: Yup.string()
                        .required('El Password es Obligatorio')
                        .min(10, 'El password debe ser de al menos 10 caracteres'),
        }),
        onSubmit: async valores => {
            /* console.log('enviando')
            console.log(valores); */
            //aplicando destruction para obtener los valores del form
            const { first_name, last_name, first_apellido, last_apellido, email, password} = valores;

            try {
                const { data } = await addNewUsuario({
                    variables: {
                        input: {
                            first_name, 
                            last_name,
                            first_apellido,
                            last_apellido,
                            email, 
                            password
                        }
                    }
                });
                //console.log(data);

                //usuario creado correctamente
                //guardarMensaje(`Se creo correctamente el Usuario: ${data.addNewUsuario.first_name} `);

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'se creo correctamente el Usuario ' + data.addNewUsuario.first_name,
                    showConfirmButton: false,
                    timer: 4000
                  })

                setTimeout(() => {
                    //guardarMensaje(null);
                    router.push('/login');
                }, 4000);

                //redirigir usuario para iniciar sesion
            } catch (error) {
                //console.log(error);
                //guardarMensaje(error.message);

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    showConfirmButton: false,
                    timer: 4000
                  })

                setTimeout(() => {
                    //guardarMensaje(null);
                }, 3000);
            }
        }
    });

    // if(loading) return "Cargando...";

    /* const mostrarMesaje = () => {
        return(
            <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative w-full my-3 max-w-sm text-center mx-auto" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline"> {mensaje}.</span>
            </div>
        );
    } */

    return ( 

        <>
        <Layout>

            <h1 className='text-center text-2xl text-white font-light'>Crear Cuenta Usuario Negocio</h1>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit} >
                        
                        <p className="text-gray-500	mb-6 text-sm">los campos con el * son obligatorios</p>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                                Nombre *
                            </label>

                            <input
                                //className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.first_name && formik.errors.first_name ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                id="first_name"
                                type="text"
                                placeholder="Primer Nombre"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                                { formik.touched.first_name && formik.errors.first_name ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.first_name}
                                    </div>
                                ) : null }
                        </div>

                        

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
                                Segundo Nombre
                            </label>

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="last_name"
                                type="text"
                                placeholder="Segundo Nombre"
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </div>

                        { formik.touched.last_name && formik.errors.last_name ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.last_name}</p>
                                </div>
                            ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_apellido">
                                Apellido Paterno *
                            </label>

                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.first_apellido && formik.errors.first_apellido ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                id="first_apellido"
                                type="text"
                                placeholder="Primer Apellido"
                                value={formik.values.first_apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.first_apellido && formik.errors.first_apellido ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.first_apellido}
                                    </div>
                                ) : null }
                        </div>

                        {/* { formik.touched.first_apellido && formik.errors.first_apellido ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.first_apellido}</p>
                                </div>
                            ) : null } */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_apellido">
                                Apellido Materno *
                            </label>

                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.last_apellido && formik.errors.last_apellido ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                id="last_apellido"
                                type="text"
                                placeholder="Segundo Apellido"
                                value={formik.values.last_apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                                { formik.touched.last_apellido && formik.errors.last_apellido ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.last_apellido}
                                    </div>
                                ) : null }

                        </div>

                        {/* { formik.touched.last_apellido && formik.errors.last_apellido ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.last_apellido}</p>
                                </div>
                        ) : null } */}

                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email *
                                </label>

                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.email && formik.errors.email ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                { formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.email}
                                    </div>
                                ) : null }
                        </div>

                        {/* { formik.touched.email && formik.errors.email ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null } */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password *
                            </label>

                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.password && formik.errors.password ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                                { formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.password}
                                    </div>
                                ) : null }
                        </div>

                        {/* { formik.touched.password && formik.errors.password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.password}</p>
                                </div>
                        ) : null } */}

                        <input 
                            type="submit"
                            className="bg-gray-800 rounded w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
                            value="Crear Cuenta"
                        />

                        {/* {mensaje && mostrarMesaje()} */}

                    </form>
                </div>

            </div>

        </Layout>
    </>
        
     );
}
 
export default CreateUser;