import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import style from './styles.module.scss';

const Item = ({children}) => {

}

const Listing = ({children, title}) => {

    return (
      <Accordion className={style.listingHolder}>
        <AccordionSummary>
          <span className={style.listingHolder__title}>{title}</span>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    )
}

export default Listing;