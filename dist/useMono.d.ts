import { MonoProps, MonoConfig } from './types';
/**
 *
 * @param config takes in configuration for mono
 * @returns handleMono function
 */
export default function useMono({ public_key, }: MonoConfig): ({ onSuccess, onClose }: MonoProps) => void;
