import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import Swal from 'sweetalert2';

const AUTENFIFICAR_USUARIO = gql`
    mutation autentificarUsuario($input: AutentificarInput){
        autentificarUsuario(input: $input){
            token
        }
    }
`;

const Login = () => {

    //Routing
    const router = new useRouter();

    //Mutation para autentificar usuario
    const [ autentificarUsuario ] = useMutation(AUTENFIFICAR_USUARIO);

    //validacion del formulario
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('El Email no es valido')
                        .required('El Email es Obligatorio'),
            password: Yup.string()
                        .required('El Password es Obligatorio')
        }),
        onSubmit: async valores => {
            
            //aplicando destruction para obtener los valores del form de login
            const { email, password} = valores;

            try {
                const { data } = await autentificarUsuario({
                    variables: {
                        input: {
                            email, 
                            password
                        }
                    }
                });
                //console.log(data);

                //usuario creado correctamente
                
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Autenticado...',
                    padding: '2em',
                  });

               
                //Guardar el token en localstorage
                
                setTimeout(() => {
                    const { token } = data.autentificarUsuario;
                    localStorage.setItem('token', token);
                },2000);

                //redireccionar hacia clientes
                setTimeout(() => {
                    router.push('/Dasboard');
                }, 2000);

                //redirigir usuario para iniciar sesion
            } catch (error) {
                /* console.log(error); */
                Toast.fire({
                    icon: 'error',
                    title: error.message,
                  });
                /* guardarMensaje(error.message);
                
                setTimeout(() => {
                    guardarMensaje(null);
                }, 3000); */
            }
        }
    });

    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

    return ( 
        <>
            <Layout>
                <h1 className='text-center text-2xl text-white font-light'>Login</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit} >
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>

                                { formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.email}
                                    </div>
                                ) : null }

                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.email && formik.errors.email ? 'border-2 border-red-500 border-4-4' : 'focus:shadow-outline' }`}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {/* { formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-700 p-1">
                                        {formik.errors.email}
                                    </div>
                                ) : null } */}

                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
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

                            <input 
                                type="submit"
                                className="bg-gray-800 rounded w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
                                value="Iniciar Sesión"
                            />

                        </form>
                    </div>

                </div>

            </Layout>
        </>
     );
}
 
export default Login;