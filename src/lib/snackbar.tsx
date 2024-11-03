import { MESSAGES } from '@/constant/messages';
import { SNACKBAR_VARIANTS } from '@/constant/snackbar';
import { enqueueSnackbar } from 'notistack';

export const errorSnackbar = (message?: any) => {
  const errorMessage = Array.isArray(message)
    ? message?.[0]
    : message ?? MESSAGES?.SOMETHING_WENT_WRONG;

  enqueueSnackbar(errorMessage, {
    variant: SNACKBAR_VARIANTS?.ERROR,
  });
};

export const successSnackbar = (message: any = MESSAGES?.SUCCESS) => {
  enqueueSnackbar(message, {
    variant: SNACKBAR_VARIANTS?.SUCCESS,
  });
};

export const warningSnackbar = (message: any) => {
  enqueueSnackbar(message, {
    variant: SNACKBAR_VARIANTS?.WARNING,
  });
};
