import { styled } from '@mui/system';

const CustomMainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const CustomSmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const CustomActionDiv = styled('div')({
  textAlign: 'center',
});

export { CustomMainContainer, CustomSmMargin, CustomActionDiv };