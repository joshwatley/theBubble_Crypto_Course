import React from 'react'
import {MidFooterWrapper, MidFooterItemWrapper, MidFooterImage, MidFooterTextMain, MidFooterTextSecondary, MidFooterContentWrapper} from './MidFooterElements'

function MidFooter() {
    return (
        <MidFooterWrapper>

            <MidFooterContentWrapper>

            <MidFooterItemWrapper>
                <MidFooterImage>
                    <MidFooterTextMain>70+ </MidFooterTextMain>
                    <MidFooterTextSecondary>Happy Customers</MidFooterTextSecondary>
                    
                </MidFooterImage>
            </MidFooterItemWrapper>

            <MidFooterItemWrapper>
                <MidFooterImage>
                    <MidFooterTextMain>£7,000</MidFooterTextMain>
                    <MidFooterTextSecondary>In Profits</MidFooterTextSecondary>
                    
                </MidFooterImage>
            </MidFooterItemWrapper>

            <MidFooterItemWrapper>
                <MidFooterImage>
                    <MidFooterTextMain>30 Day</MidFooterTextMain>
                    <MidFooterTextSecondary>Money Back Guarantee</MidFooterTextSecondary>
                    
                </MidFooterImage>
            </MidFooterItemWrapper>

            </MidFooterContentWrapper>
            
            
        </MidFooterWrapper>
    )
}

export default MidFooter
