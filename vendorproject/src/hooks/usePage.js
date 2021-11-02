import React, {useEffect, useRef} from 'react';

export const PAGES = {
    HOME: 'HOME',
    CUSTOMER: 'CUSTOMER',
    BUSSINESS: 'BUSSINESS',
    BUSSINESSPAGE: 'BUSSINESSPAGE',
    CONTRACT: 'CONTRACT',
    MARKETING: 'MARKETING',
    REPORT: 'REPORT',
    CUSTOMERSERVICE: 'CUSTOMERSERVICE',
    PURCHASE: 'PURCHASE',
    REPAIR: 'REPAIR',
    DOING: 'DOING',
    SPAREPARTS: 'SPAREPARTS',
};
export const PageContext = React.createContext(PAGES.HOME);
export const PageSetter = React.createContext(()=>{});

export default function usePage(...thisPages) {
    const nowPage = React.useContext(PageContext);
    const showThis = thisPages.some((thisPage)=>nowPage === thisPage);
    const showClassName = showThis ? "" : "d-none";
    const prevPageRef = useRef();
    useEffect(() => {
        if (!showThis) prevPageRef.current = nowPage;
    });
    const prevPage = prevPageRef.current;
    return [nowPage, showClassName, showThis, prevPage];
}