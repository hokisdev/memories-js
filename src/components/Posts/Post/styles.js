import { styled } from '@mui/system';

const CustomMedia = styled('div')({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

const CustomBorder = styled('div')({
  border: 'solid',
});

const CustomFullHeightCard = styled('div')({
  height: '100%',
});

const CustomCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

const CustomOverlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

const CustomOverlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

const CustomGrid = styled('div')({
  display: 'flex',
});

const CustomDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

const CustomTitle = styled('div')({
  padding: '0 16px',
});

const CustomCardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

export { CustomMedia, 
         CustomBorder, 
         CustomFullHeightCard, 
         CustomCard, 
         CustomOverlay, 
         CustomOverlay2, 
         CustomGrid, 
         CustomDetails, 
         CustomTitle, 
         CustomCardActions };