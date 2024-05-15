'use client'
import { useState } from 'react';

const Modal_noX = ({ isOpen, onClose, title, children }) => {
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
                  
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal_noX;
