import React, { Component, Fragment } from 'react'; // You can use 'object destructuring' to import Fragment here and save some typing later
import ExperienceList from './ExperienceList';
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
                        <Fragment key={rowdata.id}>
                            <p>
                                <b><i>{rowdata.Roll}</i></b><br />
                                <b><i>{rowdata.Company}</i></b> <br />
                                <i>{rowdata.Descriprion}</i>
                            </p>


                            {
                                (typeof (rowdata.detail) == 'object') &&
                                <Fragment>
                                    {rowdata.detail.map((subRowData) =>
                                        <Fragment key={rowdata.id}>
                                            <ul>
                                                <li>{subRowData.detail1}</li>
                                                <li>{subRowData.detail2}</li>
                                                <li>{subRowData.detail3}</li>
                                                <li>{subRowData.detail4}</li>
                                                {/* You might want to use array map here again to render these <li>! */}
                                            </ul>
                                        </Fragment>
                                    )
                                    }
                                </Fragment>
                            }

                        </Fragment>
                    )
                }

                </div>
            </div>
        )
    }
};

export default Experience;