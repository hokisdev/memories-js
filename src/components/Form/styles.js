import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';

const CustomRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CustomForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const CustomFileInput = styled('input')({
  width: '97%',
  margin: '10px 0',
});

const CustomButtonSubmit = styled(Button)({
  marginBottom: 10,
});

export { CustomRoot, CustomPaper, CustomForm, CustomFileInput, CustomButtonSubmit };