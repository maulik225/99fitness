import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import "../css/weekday.css";
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WeekDays = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  const [value, setValue] =useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
    const [days] = useState([
      {
        day: "Monday",
        component:<Monday />
      },
      {
        day: "T",
        component:<Tuesday />
      },
      {
        day: "W",
        component:<Wednesday />
      },
      {
        day: "T",
        component:<Thursday />
      },
      {
        day: "F",
        component:<Friday />
      },
      {
        day: "S",
        component:<Saturday />
      }
    ]);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          {/* <Item>xs</Item> */}
        </Grid>
        <Grid item xs={8}>
          <Item className="grid_items">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="tabs"
            >
              <Tab label="M" {...a11yProps(0)} />
              <Tab label="T" {...a11yProps(1)} />
              <Tab label="W" {...a11yProps(2)} />
              <Tab label="Th" {...a11yProps(3)} />
              <Tab label="F" {...a11yProps(4)} />
              <Tab label="S" {...a11yProps(5)} />
            </Tabs>
          </Item>

          {days.map((data, index) => (
            <div key={index}>
              <TabPanel value={value} index={index}>
                <h1>{data.day}</h1>
                {data.component}
              </TabPanel>
            </div>
          ))}
        </Grid>
        <Grid item xs>
          {/* <Item>xs</Item> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default WeekDays