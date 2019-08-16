import React, { useState } from 'react'
import './SizeSwitch.css'
import { classList } from './util'

export default function SizeSwitch ({ isLarge, setIsLarge }) {

    const [isClicked, setIsClicked] = useState (false)
    
    function onClick () {
        setIsClicked (true)
        setIsLarge(!isLarge)
    }

    return <div className={classList ({ 'size-switch': 1, 'active': isLarge, 'clicked': isClicked })} onClick={onClick}> 
            
                <div className='ball'>
                    <div className='body'></div>
                </div>

                <div className='label-big'>35</div>
                <div className='label-little'>30</div>

                <div className='shape'>   
                    <svg viewBox="0 0 675 394" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <path d="M335.482964,272.45079 C353.176938,259.07513 368.742496,251.381269 382.179637,249.369207 C396.847544,247.172852 421.610217,244.784795 455.036312,251.976192 C469.131981,255.00878 482.677427,262.22964 503.426627,271.780036 C517.438568,280.780017 534.109688,286 552,286 C601.705627,286 642,245.705627 642,196 C642,146.294373 601.705627,106 552,106 C535.879949,106 519.891938,110.376352 506.805012,117.799027 C506.703311,117.85671 506.601745,117.914584 506.500315,117.972647 L506.55297,117.925084 C505.013263,118.644994 504.204803,119.020579 504.127591,119.051837 C477.049962,130.013812 460.071193,135.737995 449.036312,138.196101 C414.820735,145.817888 390.847544,143.015349 376.179637,140.81172 C356.091767,137.793824 331.247144,122.035741 301.645769,93.5374705 C299.870135,91.7080712 298.048296,89.9238063 296.182117,88.1865404 C295.457487,87.4650378 294.730115,86.736191 294,86 L294.005526,86.1996209 C267.467041,62.4446835 232.420389,48 194,48 C111.157288,48 44,115.157288 44,198 C44,280.842712 111.157288,348 194,348 C235.406879,348 272.895142,331.222412 300.037551,304.094476 L300.047646,304.459134 L335.482964,272.45079 Z M551.250156,319.912138 C527.538478,319.912138 515.248631,333.301863 463.5799,341.799266 C418.312739,349.243871 324.535883,346.802399 313.629456,355.446296 C265.206083,393.824277 206.818795,393.824277 189.880352,393.824277 C156.051178,393.824277 127.099347,384.395142 97.63748,367.118812 C4.27193301,312.369599 0.924065014,223.195198 0.212248014,206.357395 C-5.80132299,64.1082178 117.397892,-9.09494702e-13 188.380605,-9.09494702e-13 C243.743793,-9.06078821e-13 315.625124,30.9315758 361.878845,53.4290789 C403.990972,73.9121384 403.990972,73.9121384 423.032771,73.9121384 C444.097423,73.9121384 533.878938,73.9121384 551.250156,73.9121384 C619.18118,73.9121384 674.250156,128.981114 674.250156,196.912138 C674.250156,264.843163 619.18118,319.912138 551.250156,319.912138 Z" id="Combined-Shape" fill="#FFA500" fillRule="nonzero"></path>
                        </g>
                    </svg>
                </div>
            </div>
}