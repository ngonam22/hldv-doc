import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import style from './styles.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({ children }) => {

}

const Listing = ({ children, title, summarize }) => {

  return (
    <Accordion className={style.listingHolder}>
      <AccordionSummary className='hey'
        expandIcon={<ExpandMoreIcon sx={{ color: '#000000' }} />}
      >
        <span className={style.listingHolder__title}>{title}</span>
        <span className={style.listingHolder__summarize}>{summarize}</span>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default Listing;