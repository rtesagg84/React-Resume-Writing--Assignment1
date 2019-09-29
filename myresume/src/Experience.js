import React, { Component } from 'react'
import ExperienceList from './ExperienceList'
class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ExperienceList: ExperienceList
        }
    }
    render() {
        return (
            <div className="Experince">
                
                <div style={{ paddingLeft: '80px' }}>{

                    this.state.ExperienceList.map((rowdata) =>
                        <React.Fragment key={rowdata.id}>
                            <p  >
                               <b><i>{rowdata.Roll}</i></b><br/>
                               <b><i>{rowdata.Company}</i></b> <br/>
                                <i>{rowdata.Descriprion}</i>
                            </p>


                            {
                                (typeof (rowdata.detail) == 'object') ?
                                    <React.Fragment>
                                        {rowdata.detail.map((subRowData) =>
                                            <React.Fragment key={rowdata.id}>
                                                <ul>

                                                    <li>{subRowData.detail1}</li>
                                                    <li>{subRowData.detail2}</li>
                                                    <li>{subRowData.detail3}</li>
                                                    <li>{subRowData.detail4}</li>
                                                </ul>
                                            </React.Fragment>
                                        )
                                        }
                                    </React.Fragment> : null
                            }

                        </React.Fragment>
                    )
                }

            </div>
            </div>
                )
            }
            } 
export default Experience;