import { styled } from '@mui/system';

const CustomAppBar = styled('div')({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const CustomHeading = styled('h2')({
  color: 'rgba(0,183,255, 1)',
});

const CustomImage = styled('img')({
  marginLeft: '15px',
});

export { CustomAppBar, CustomHeading, CustomImage };
