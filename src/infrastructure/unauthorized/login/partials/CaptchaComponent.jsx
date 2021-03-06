import React, {useEffect} from "react"

import {
    StyledInputLogin,
    InputBlock,
    StyledRelativeBlock,
    StyledRefreshBtn,
    StyledSvgInput,
    StyledRefreshBlock
} from "assets/js/login";
import {withNamespaces} from "react-i18next";
import {StyledTypographyError} from "assets/js/library/base/typography"

function CaptchaComponent({t, setUser, errors, src, refreshCaptcha, keyUp}) {

    const changeCaptcha = (e) => {
        const currentValue = e.currentTarget.value
        setUser(prevState => {
            return {
                ...prevState, cValue: currentValue
            }
        })
    }

    useEffect(() => {
        refreshCaptcha()
    }, [refreshCaptcha]);

    return (<>
        <StyledRefreshBlock>
            <StyledRefreshBtn onClick={refreshCaptcha}>
                <span className="icon-refresh"></span>
            </StyledRefreshBtn>
            <img src={src} alt=""/>
        </StyledRefreshBlock>
        <InputBlock>
            <StyledRelativeBlock>
                <StyledInputLogin
                    name="name"
                    type="text"
                    placeholder={t('translation:safeCode')}
                    onChange={changeCaptcha}
                    onKeyUp={keyUp}
                />
                <StyledSvgInput className="icon-key1"></StyledSvgInput>
            </StyledRelativeBlock>
            {errors.captchaError ?
                <StyledTypographyError>{t('translation:wrongSafeCode')}</StyledTypographyError> : ''}
        </InputBlock>
    </>)
}

export default withNamespaces('users,translation')(CaptchaComponent)

