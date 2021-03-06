import React, {useState} from 'react';
import {withNamespaces} from "react-i18next";

import {Modal, Box, Fade} from '@material-ui/core';
import HelpIcon from "@material-ui/icons/Help";

import CommentFormComponent from "./modal/CommentFormComponent.jsx";

import {
    StyledCloseGuideButton,
    StyledNextButton,
    StyledPrevButton
} from "assets/js/partials/guideBlock";
import Tour from "reactour";
import {StyledTourButton} from "assets/js/content/partials/modal/insideModal/modalForm";
import {ReactComponent as Exit} from "assets/svg/exit.svg";
import {constSteps} from "./CommentModalComponent.js"
import {StyledCancelButton, ModalBody} from "assets/js/library/components/modal"
import {StyledSvg} from "assets/js/library/base/all"

import {makeStyles} from "@material-ui/styles";
import Backdrop from "@material-ui/core/Backdrop";
import {modalClasses} from "assets/js/library/components/modal";

const useStyles = makeStyles(modalClasses)

function CommentModalComponent({t, open, setOpen, publishedComments, unconfirmedComments, handlePagination, comment, setComment, commentStatus}) {
    const classes = useStyles({maxWidth: '470px'})
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const steps = constSteps

    const handleClose = () => {
        setOpen({show: false, id: ''});
    }

    const clicked = () => {
        setIsTourOpen(true);
    }

    return (<Modal aria-labelledby="transition-modal-title"
                   aria-describedby="transition-modal-description"
                   className={classes.modal}
                   open={open.show}
                   onClose={handleClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}>
        <Fade in={open.show} id="modal">
            <Box>
                <StyledCancelButton onClick={handleClose}>
                    <StyledSvg>
                        <Exit width={"40px"} height={"40px"}/>
                    </StyledSvg>
                </StyledCancelButton>
                <ModalBody height="440px">
                    <CommentFormComponent open={open}
                                          handlePagination={handlePagination}
                                          comment={comment}
                                          setComment={setComment}
                                          setOpen={setOpen}
                                          unconfirmedComments={unconfirmedComments}
                                          commentStatus={commentStatus}
                                          publishedComments={publishedComments}/>
                </ModalBody>
                <StyledTourButton onClick={clicked} show="true">
                    <HelpIcon/>
                </StyledTourButton>
                <Tour showCloseButton={false}
                      showNavigation={false}
                      showNavigationNumber={false}
                      disableDotsNavigation={false}
                      lastStepNextButton={<StyledCloseGuideButton>{t('translation:endGuide')}</StyledCloseGuideButton>}
                      nextButton={<StyledNextButton><span>{steps.length}/{currentStep}</span> {t('translation:nextStep')}
                      </StyledNextButton>}
                      prevButton={<StyledPrevButton>{t('translation:prevStep')}</StyledPrevButton>}
                      steps={steps}
                      customizedCloseButton={
                          <StyledCloseGuideButton>{t('translation:closeGuide')}</StyledCloseGuideButton>}
                      isOpen={isTourOpen}
                      showNumber={true}
                      startAt={0}
                      getCurrentStep={(curr) => setCurrentStep(curr + 1)}
                      onRequestClose={() => setIsTourOpen(false)}/>
            </Box>
        </Fade>
    </Modal>);

}

export default withNamespaces('translation')(CommentModalComponent);
