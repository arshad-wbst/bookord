import { useContext } from 'react';
import { ToastContext } from '../componets/ToastProvider';

export const useToast = () => {
    return useContext(ToastContext);
};
