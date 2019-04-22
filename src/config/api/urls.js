// import {Platform} from "react-native";

class Urls {
    static panSou = ( word,num,size )=> {
        const base = 'https://www.52sopan.com'
        return {
            count:`${base}/search.php?mode=count&q=${word}`,
            searchPwd: `${base}/query.php?url=${word}`,
            getPwd:`${base}/search.php?mode=get-password&id=${word}`,
            search:`${base}/search.php?mode=so&page_size=${size||30}&page_number=${num||0}&q=${word}`
        }
    }
}

export default Urls