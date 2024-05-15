'use client'
import { useState } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <div className={`${isModalOpen ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center z-50`}>
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="bg-white rounded-md shadow-lg z-10 w-[95%] max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
                <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between pb-2 mb-4 border-b">
                        <h2 className="text-sizes-header font-medium">{title}</h2>
                        <button className="text-gray-500 hover:text-gray-700 text-center" onClick={closeModal}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule=""
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                    clipRule=""
                                />
                            </svg>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
