import { MonoProps, MonoConfig } from './types';
/**
 *
 * @param config takes in configuration for mono
 * @returns handleMono function
 */
export default function useKorapay(monoConfig: MonoConfig): ({ onSuccess, onClose }: MonoProps) => void;
