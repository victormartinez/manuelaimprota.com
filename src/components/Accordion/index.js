import React, { useState } from "react"
import PropTypes from 'prop-types';

import * as S from "./styled"


const Accordion = ({ title, content }) => {
    const [accordionStatus, setAccordionStatus] = useState(false);

    const onClicked = () => {
        setAccordionStatus(!accordionStatus);
    }

    return (
        <S.AccordionBox className={`accordion ${accordionStatus ? "uncollapsed" : 'collapsed'}`}>
            <S.AccordionButton onClick={onClicked}>
                <S.Arrow class="arrow" />{title}
                
            </S.AccordionButton>
            <S.AccordionPanel className="accordion-panel">
                {content}
            </S.AccordionPanel>
        </S.AccordionBox>
    )
}

export default Accordion

Accordion.propTypes = {
    title: PropTypes.object,
    content: PropTypes.object
};