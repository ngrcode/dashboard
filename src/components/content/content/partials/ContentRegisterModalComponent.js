import React, {useContext, useEffect, useState} from "react";
import {withNamespaces} from "react-i18next";
import i18next from "i18next";
import clsx from "clsx";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/styles";
import {Box, Typography} from "@material-ui/core";
// import * as cancelIcon from './../../../../assets/svg/cancel-icon.svg';
import ContentListOfContentType from "./ContentListOfContentType";

import {useStyles} from "assets/js/content/contentRegisterModal";
import {ModalBox, ModalAround} from "assets/js/content/contentRegisterModal";
import contentService from "core/services/content.service";
import NewContentContext from "contexts/NewContentContext";
import AppContext from "contexts/AppContext";
import ContentsContext from "contexts/ContentsContext";
import {StyledFooterRegisterContent} from "assets/js/content/contentRegisterModal";
import {StyledButton, StyledHead, StyledSvg} from "assets/js/App";
import {green} from "components/partials/Colors";
import {ModalBody} from "assets/js/content/contentRegisterModal";

import NewContent from "./../newContent/index"
import {ReactComponent as Exit} from "../../../../assets/svg/exit.svg";

const useStyle = makeStyles(useStyles);

function ContentRegisterModalComponent({t, openRegisterForm, handleCloseContentForm}) {
    const classes = useStyle();
    const [contentType, setContentType] = useState('');

    const handleCloseRegisterForm = () => {
        handleCloseContentForm();
        setContentType('');
    };

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRegisterForm}
                onClose={handleCloseRegisterForm}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {contentType === '' ?<ContentListOfContentType handleCloseRegisterForm={handleCloseRegisterForm} openRegisterForm={openRegisterForm} setContentType={setContentType}/>
                    :<NewContent contentType={contentType} openRegisterForm={openRegisterForm} handleCloseRegisterForm={handleCloseRegisterForm}/>
                }
            </Modal>

        </>);
}

export default withNamespaces('user,translation')(ContentRegisterModalComponent);
