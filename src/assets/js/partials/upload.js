import {green,grey} from "assets/js/library/abstracts/colors";

export const uploadStyles = {
    uploadFile: {
        position: 'relative',
        minHeight: '120px',
        border: `2px dashed ${grey[0]}`,
        '&:hover':{
            border:`2px dashed ${grey[8]}`,
        },
        '& input': {
            height: '100%',
            cursor: 'pointer',
        },
        '& .input': {
            position: 'absolute',
            top: '0',
            bottom: '0',
            width: '100%',
            opacity: 0,
            left:0,
        },
        '& .file': {
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            '& .blockPart': {
                textAlign: 'center',
                width: '100%',
                fontSize:'1rem',
                padding:'1rem',
                '& .addIcon': {
                    cursor: 'pointer',
                    zIndex: '50',
                    '& svg': {
                        borderRadius: '100%',
                        color: 'white',
                        backgroundColor: green[0],
                    }
                },
                '& #fileBlock': {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    margin:'18px 0!important',
                    '& > div': {//for voice
                        margin: '0!important',
                        height:'100px',
                        '&>div':{
                            padding:'36px 9px 10px 13px!important'
                        }
                    },
                    '& .cancel': {
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '10px',
                        left: '12px',
                        color: green[0],
                        zIndex: '50'
                    },
                    '& .cancelVoice': {
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        color: green[0],
                    },
                    '& .item': {
                        boxSizing: 'border-box',
                        width: '100%!important',
                        padding: '10px',
                        height: '120px!important',
                    }
                },
                '& .previewText': {
                    textAlign: 'center',
                    width: '100%',
                }
            }
        },
    },
    video:{
       '& div':{
           boxSizing: 'border-box',
           width: '100%!important',
           padding: '10px',
           height: '120px!important',
       }
    }
};

export default uploadStyles;
