import { useState, useCallback } from 'react';
import type { ImageLoadingState } from '../types/photos';

export const useImageLoading = (onError?: (error: Error) => void) => {
  const [state, setState] = useState<ImageLoadingState>({
    isLoading: true,
    error: null
  });

  const handleLoad = useCallback(() => {
    setState({ isLoading: false, error: null });
  }, []);

  const handleError = useCallback((error: Error) => {
    setState({ isLoading: false, error });
    onError?.(error);
  }, [onError]);

  return {
    ...state,
    handleLoad,
    handleError
  };
}; 