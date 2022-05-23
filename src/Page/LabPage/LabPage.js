import React, { useState, useEffect } from 'react'
import './labpage.css'
import { LabMeterial } from '../../JsonData.js/LabMaterial'

export default function LabPage() {
    const [labState, SetLabState] = useState(false);
    const [resp, SetResp] = useState(false);

    var x = window.matchMedia("(max-width: 700px)")
    useEffect(() => {
        SetLabState(LabMeterial);
        SetResp(x.matches);
    }, [labState, resp])



    return (
        <div>

            {
                labState ? (
                    <div>
                        {
                            resp == false?
                                labState.map((labState, index) => (
                                    <div>
                                        {
                                            labState.laboneVideo ? (
                                                <video style={{ width: "100%", height: "90%" }} autoPlay loop muted>
                                                    <source src={labState.laboneVideo} type="video/mp4" />
                                                </video>
                                            ) : ''
                                        }
                                        {
                                            labState.labtwoImglg ?
                                                (
                                                    <img src={labState.labtwoImglg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labthreeImglg ?
                                                (
                                                    <img src={labState.labthreeImglg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labFourthImglg ?
                                                (
                                                    <img src={labState.labFourthImglg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labfifthImglg ?
                                                (
                                                    <img src={labState.labfifthImglg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labsixImglg ?
                                                (
                                                    <img src={labState.labsixImglg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labLastvdo ? (
                                                <video style={{ width: "100%", height: "95%" }} autoPlay loop muted>
                                                    <source src={labState.labLastvdo} type="video/mp4" />
                                                </video>
                                            ) : ''
                                        }
                                        {
                                            labState.labseventhLg ?
                                                (
                                                    <img src={labState.labseventhLg} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                    </div>
                                ))
                                :
                                labState.map((labState, index) => (
                                    <div>
                                        {
                                            labState.laboneVideo ? (
                                                <video style={{ width: "100%", height: "90%" }} autoPlay loop muted>
                                                    <source src={labState.laboneVideo} type="video/mp4" />
                                                </video>
                                            ) : ''
                                        }
                                        {
                                            labState.labtwoImgsm ?
                                                (
                                                    <img src={labState.labtwoImgsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labthreeImgsm ?
                                                (
                                                    <img src={labState.labthreeImgsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labFourthImgsm ?
                                                (
                                                    <img src={labState.labFourthImgsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labfifthImgsm ?
                                                (
                                                    <img src={labState.labfifthImgsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labsixImgsm ?
                                                (
                                                    <img src={labState.labsixImgsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                        {
                                            labState.labLastvdo ? (
                                                <video style={{ width: "100%", height: "95%" }} autoPlay loop muted>
                                                    <source src={labState.labLastvdo} type="video/mp4" />
                                                </video>
                                            ) : ''
                                        }
                                        {
                                            labState.labseventhsm ?
                                                (
                                                    <img src={labState.labseventhsm} style={{ width: "100%", height: "auto" }} alt="loading.." />
                                                ) : ''
                                        }
                                    </div>
                                ))
                        }

                    </div>
                ) : 'loading..'
            }




        </div>
    )
}
