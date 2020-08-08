import * as React from 'react';
import useMonoScript from './script';
import { MonoProps, MonoConfig } from './types';

/**
 *
 * @param config takes in configuration for mono
 * @returns handleMono function
 */
export default function useMono(
  monoConfig: MonoConfig
): ({ onSuccess, onClose }: MonoProps) => void {
  const [loaded, error] = useMonoScript();

  React.useEffect(() => {
    if (error) {
      throw new Error('Unable to load mono collection modal');
    }
  }, [error]);

  /**
   *
   * @param object - {onSuccess, onClose}
   */
  function handleMono({ onSuccess, onClose }: MonoProps): void {
    if (error) {
      throw new Error('Unable to load korapay collection modal');
    }

    if (loaded) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const connect = new window.Connect(monoConfig.public_key, {
        onSuccess,
        onClose,
      });

      connect.setup();
      connect.open();
    }
  }

  return handleMono;
}
