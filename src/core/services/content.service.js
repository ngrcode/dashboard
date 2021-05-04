import axios from "axios";
import contentUrl from 'utils/urls/content.urls';
import {
    cocdavcsrfauthHeader,
    chahauthHeader,
    authHeader,
    caauthHeader,
    cjajauthHeader,
    cjajcharsetauthHeader,
    cjajcsrfauthHeader,
    cjcdajcsrfauth
} from "utils/headers";
import {Method} from "infrastructure/layout";

export function getDomainSource() {
    let url = contentUrl.domainSourceUrl;
    return axios.get(url);
}

export function getTags(handleError){
    let url = contentUrl.getTagsUrl;
    return Method({method:'get',url:url,headers: authHeader(),handleError:handleError});
}

export function getNewsCategory(handleError) {
    let url = contentUrl.getNewsCategoryUrl;
    return Method({method:'get',url:url,headers: cjajcsrfauthHeader(),handleError:handleError})
}

export function uploadSingImg(file,handleError) {
    const url = contentUrl.uploadSingImgUrl;
    return Method({method:'post',url:url,body:file,headers: cjcdajcsrfauth(file.name),handleError:handleError});

}

// export function uploadMultiImg(e,handleError) {
//     let url = contentUrl.uploadMultiImgUrl;
//     // return axios.post(url, e, avcoAuthcdHeader(e));
//     return Method({method:'post',url:url,body:e,headers: avcoAuthcdHeader(e),handleError:handleError});
// }

export function uploadVideo(e,handleError) {
    let url = contentUrl.uploadVideoUrl;
    return Method({method:'post',url:url,body:e,headers: cocdavcsrfauthHeader(e.name),handleError:handleError});

}

export function uploadVoice(e,handleError) {
    let url = contentUrl.uploadVoiceUrl;
    return Method({method:'POST',url:url,headers: cocdavcsrfauthHeader(e.name),handleError:handleError,body:e});
}

// export function uploadMultiFile(e) {
//     let url = contentUrl.uploadFileUrl;
//     // return axios.post(url, e, avcoAuthcdHeader(e));
//     return Method({method:'POST',url:url,body:e, headers:avcoAuthcdHeader(e)});
// }

export function getContents(handleError) {
    let url = contentUrl.getContentsUrl
    return Method({method:'get',url:url,headers: authHeader(),handleError:handleError});
}

export function deleteContent(id,handleError) {
    let url = contentUrl.deleteContentUrl(id);
    return Method({method:'delete',url:url,headers:chahauthHeader(),handleError:handleError});
}

export function getContent(id,handleError) {
    let url = contentUrl.getContentUrl(id);
    return Method({method:'get',url:url,headers:authHeader(),handleError:handleError});
}

export function registerContent(content,handleError) {
    let url = contentUrl.registerContentUrl;
    return Method({method:'post',url:url,headers:cjajcharsetauthHeader(),body:content,handleError:handleError});
}

export function editContent(content,id,handleError) {
    let url = contentUrl.editContentUrl(id);
    return Method({method:'patch',url:url,headers:cjajauthHeader(),body:content,handleError:handleError});
}

export function getContentTypeList(handleError) {
    let url = contentUrl.getContentTypeListUrl;
    return Method({method:'get',headers:authHeader(),url:url,handleError:handleError});
}

export function getStates(handleError) {
    let url = contentUrl.getStatesUrl;
    return Method({method:'get',headers:authHeader(),url:url,handleError:handleError});
}

export function handleContentAction(action, selectedCheckBoxes,handleError) {
    let urlDelete = contentUrl.contentActionDeleteUrl;
    let urlStatus = contentUrl.contentActionStatusUrl;
    const body = [];
    switch (action) {
        case 'deleted':
            for (let item of selectedCheckBoxes) {
                body.push({
                    "id": item,
                    "setdelete": "deleted"
                })
            }
            return Method({method:'post',url:urlDelete,headers:caauthHeader(),body:body,handleError:handleError});
            break;
        case 'true':
            for (let item of selectedCheckBoxes) {
                body.push({
                    "id": item,
                    "setPublished": true
                })
            }
            return Method({method:'post',url:urlStatus,headers:caauthHeader() ,body:body,handleError:handleError});
            break;
        default:
            for (let item of selectedCheckBoxes) {
                body.push({
                    "id": item,
                    "setPublished": false
                })
            }
            return Method({method:'post',url:urlStatus,headers: caauthHeader(),body: body,handleError:handleError});
    }
}
