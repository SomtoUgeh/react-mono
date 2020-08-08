import * as React from 'react';
import { MonoConfig } from './types';
interface MonoButtonProps extends MonoConfig {
    text?: string;
    className?: string;
    disabled?: boolean;
    onClose?: () => void;
    onSuccess: (response: {
        code: string;
    }) => void;
    children?: React.ReactNode;
}
declare const MonoButton: ({ text, className, children, onSuccess, onClose, disabled, ...config }: MonoButtonProps) => JSX.Element;
export default MonoButton;
