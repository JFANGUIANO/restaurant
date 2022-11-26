import React, { useState } from 'react';

const ModalRestaurant = () => {
    
    const [showModal, setShowModal] = useState(false);

    return ( 
        <>
            <div className="flex items-center justify-center h-60">
                <button
                    className="px-6 py-3 text-white text-sm bg-blue-800 rounded-md mt-5 uppercase font-bold"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Open Modal
                </button>
            </div>
            {showModal ? (
                <>
                    <div className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-gray-400 opacity-50 focus:opacity-100 hover:opacity-60 hover:no-underline"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">   
                                <div className="mt-2 text-left sm:ml-4 sm:text-left">
                                    <h1 className="text-center font-black text-gray-800 text-xl">
                                        Crear Negocio
                                    </h1>
                                    <form className="bg-white rounded px-2 pt-6 pb-8 mb-1" /* onSubmit={formik.handleSubmit} */ >

                                        {/* name  */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                                                Nombre
                                            </label>

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                placeholder="Nombre"
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                        </div>

                                        {/* description  */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                                                Descripción
                                            </label>

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="description"
                                                type="text"
                                                placeholder="Descripción"
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                        </div>

                                        {/* number_phone  */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="number_phone">
                                                Numero De Telefono
                                            </label>

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="number_phone"
                                                type="tel"
                                                placeholder="Numero De Telefono"
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                        </div>

                                        {/* address  */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="address">
                                                Dirección
                                            </label>

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="address"
                                                type="text"
                                                placeholder="Dirección"
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                        </div>

                                        {/* email_address  */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                                Email
                                            </label>

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.email && formik.errors.email ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null } */}

                                        </div>
                                        
                                        {/* red_social */}
                                        <div className="mb-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="red_social">
                                            Red social
                                            </label>

                                            <input
                                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="red_social"
                                                type="text"
                                                placeholder="red social"
                                                // value={formik.values.password}
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                            />

                                            {/* { formik.touched.password && formik.errors.password ? (
                                                <div className="text-red-700 p-1">
                                                    {formik.errors.password}
                                                </div>
                                            ) : null } */}

                                        </div>

                                        <input 
                                            type="submit"
                                            className="bg-gray-800 rounded w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
                                            value="Registrar Negocio"
                                        />

                                    </form>
                                    {/* <div className="items-center gap-2 mt-3 sm:flex">
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
     );
}
 
export default ModalRestaurant;