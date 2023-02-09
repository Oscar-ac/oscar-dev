import React from 'react';

const OscarDevContext = React.createContext({
    portfolioPosts: [],
    isLoading: false,
    setSlug: (slug:string) => {},
    slug: "",
    detailData: []
});

export default OscarDevContext;