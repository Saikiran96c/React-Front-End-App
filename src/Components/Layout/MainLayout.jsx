import React, { children } from 'react';
import Navigation from "../Navigation";
import ScrollToTopButton from '../Scroll';
function MainLayout({children}){
    return (
    <div>
        <Navigation></Navigation>
        <ScrollToTopButton></ScrollToTopButton>
    <div>{children}</div>
    </div>
    )
  }
 export default MainLayout;  