import styled from "styled-components";
import {StyledNotScrollbar} from "../../App";
import {grey} from "components/partials/Colors";

export const StyledModalBody = styled(StyledNotScrollbar)`
             padding:0 34px;
             margin-top:52px;
             height:100%;
             overflow-y:scroll;
`

export const StyledBottomMargin = styled.div`
             margin-bottom:140px;
`

export const StyledModalHeader = styled.div`
              height:30px
              border-bottom:1px solid ${grey[1]};
              text-align:center;
              padding:12px;
              position:absolute;
              left:0;
              right:0;
              z-index:10;
              background-color:white;
`

export const StyledModalFooter = styled.div`
             position:absolute;
             left:0;
             right:0;
             bottom:0;
             border-radius: 0 0 10px 10px;
             z-index:100;
             padding: 0;
             margin: 0;
             height: 45px;
             background-color: white;
             border-top:1px solid ${grey[0]};
             & button {
                cursor:pointer;
                width:100%;
                background-color:white;
                border:0;
                height:100%;
                &:focus{
                    outline:0;
                }
             }
`
